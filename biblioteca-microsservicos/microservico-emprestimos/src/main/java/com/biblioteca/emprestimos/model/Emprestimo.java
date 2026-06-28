package com.biblioteca.emprestimos.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "emprestimos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "ID do usuário é obrigatório")
    @Column(nullable = false)
    private Long usuarioId;

    @NotBlank(message = "Título do livro é obrigatório")
    @Column(nullable = false)
    private String tituloLivro;

    @NotBlank(message = "ISBN do livro é obrigatório")
    @Column(nullable = false)
    private String isbn;

    private String autorLivro;

    @Column(nullable = false)
    private LocalDate dataEmprestimo;

    @Column(nullable = false)
    private LocalDate dataPrevistaDevolucao;

    private LocalDate dataDevolucao;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusEmprestimo status = StatusEmprestimo.ATIVO;

    public enum StatusEmprestimo {
        ATIVO, DEVOLVIDO, ATRASADO
    }

    @PrePersist
    public void prePersist() {
        if (dataEmprestimo == null) {
            dataEmprestimo = LocalDate.now();
        }
        if (dataPrevistaDevolucao == null) {
            dataPrevistaDevolucao = LocalDate.now().plusDays(14); // 14 dias padrão
        }
    }
}
