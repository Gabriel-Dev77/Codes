package com.biblioteca.emprestimos.controller;

import com.biblioteca.emprestimos.model.Emprestimo;
import com.biblioteca.emprestimos.service.EmprestimoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emprestimos")
@Tag(name = "Empréstimos", description = "Gerenciamento de empréstimos de livros")
public class EmprestimoController {

    @Autowired
    private EmprestimoService emprestimoService;

    @GetMapping
    @Operation(summary = "Listar todos os empréstimos")
    public ResponseEntity<List<Emprestimo>> listarTodos() {
        return ResponseEntity.ok(emprestimoService.listarTodos());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar empréstimo por ID")
    public ResponseEntity<Emprestimo> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(emprestimoService.buscarPorId(id));
    }

    @GetMapping("/usuario/{usuarioId}")
    @Operation(summary = "Listar empréstimos de um usuário específico")
    public ResponseEntity<List<Emprestimo>> listarPorUsuario(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(emprestimoService.listarPorUsuario(usuarioId));
    }

    @PostMapping
    @Operation(summary = "Realizar novo empréstimo (verifica se usuário existe no microsserviço de usuários)")
    public ResponseEntity<Emprestimo> realizarEmprestimo(@RequestBody @Valid Emprestimo emprestimo) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(emprestimoService.realizarEmprestimo(emprestimo));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Atualizar dados do empréstimo")
    public ResponseEntity<Emprestimo> atualizar(@PathVariable Long id,
                                                 @RequestBody @Valid Emprestimo emprestimo) {
        return ResponseEntity.ok(emprestimoService.atualizar(id, emprestimo));
    }

    @PatchMapping("/{id}/devolver")
    @Operation(summary = "Registrar devolução de livro")
    public ResponseEntity<Emprestimo> registrarDevolucao(@PathVariable Long id) {
        return ResponseEntity.ok(emprestimoService.registrarDevolucao(id));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar registro de empréstimo")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        emprestimoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
