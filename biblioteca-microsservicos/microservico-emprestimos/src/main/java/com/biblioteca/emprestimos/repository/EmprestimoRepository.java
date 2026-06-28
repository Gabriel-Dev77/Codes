package com.biblioteca.emprestimos.repository;

import com.biblioteca.emprestimos.model.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmprestimoRepository extends JpaRepository<Emprestimo, Long> {
    List<Emprestimo> findByUsuarioId(Long usuarioId);
    List<Emprestimo> findByStatus(Emprestimo.StatusEmprestimo status);
    boolean existsByUsuarioIdAndStatus(Long usuarioId, Emprestimo.StatusEmprestimo status);
}
