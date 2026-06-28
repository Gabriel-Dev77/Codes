package com.biblioteca.emprestimos.service;

import com.biblioteca.emprestimos.client.UsuarioClient;
import com.biblioteca.emprestimos.model.Emprestimo;
import com.biblioteca.emprestimos.repository.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@Service
public class EmprestimoService {

    @Autowired
    private EmprestimoRepository emprestimoRepository;

    @Autowired
    private UsuarioClient usuarioClient;

    public List<Emprestimo> listarTodos() {
        return emprestimoRepository.findAll();
    }

    public Emprestimo buscarPorId(Long id) {
        return emprestimoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Empréstimo não encontrado com id: " + id));
    }

    public List<Emprestimo> listarPorUsuario(Long usuarioId) {
        return emprestimoRepository.findByUsuarioId(usuarioId);
    }

    public Emprestimo realizarEmprestimo(Emprestimo emprestimo) {
        // Regra de negócio: verifica se o usuário existe no microsserviço de usuários
        usuarioClient.verificarUsuarioExiste(emprestimo.getUsuarioId());

        // Regra de negócio: usuário não pode ter mais de 3 empréstimos ativos
        List<Emprestimo> emprestimosAtivos = emprestimoRepository
                .findByUsuarioId(emprestimo.getUsuarioId())
                .stream()
                .filter(e -> e.getStatus() == Emprestimo.StatusEmprestimo.ATIVO)
                .toList();

        if (emprestimosAtivos.size() >= 3) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Usuário já possui 3 empréstimos ativos. Devolva um livro antes de realizar novo empréstimo.");
        }

        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo registrarDevolucao(Long id) {
        Emprestimo emprestimo = buscarPorId(id);

        if (emprestimo.getStatus() == Emprestimo.StatusEmprestimo.DEVOLVIDO) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Este livro já foi devolvido em: " + emprestimo.getDataDevolucao());
        }

        emprestimo.setDataDevolucao(LocalDate.now());
        emprestimo.setStatus(Emprestimo.StatusEmprestimo.DEVOLVIDO);
        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo atualizar(Long id, Emprestimo emprestimoAtualizado) {
        Emprestimo existente = buscarPorId(id);
        existente.setTituloLivro(emprestimoAtualizado.getTituloLivro());
        existente.setIsbn(emprestimoAtualizado.getIsbn());
        existente.setAutorLivro(emprestimoAtualizado.getAutorLivro());
        existente.setDataPrevistaDevolucao(emprestimoAtualizado.getDataPrevistaDevolucao());
        existente.setStatus(emprestimoAtualizado.getStatus());
        return emprestimoRepository.save(existente);
    }

    public void deletar(Long id) {
        Emprestimo emprestimo = buscarPorId(id);
        emprestimoRepository.delete(emprestimo);
    }
}
