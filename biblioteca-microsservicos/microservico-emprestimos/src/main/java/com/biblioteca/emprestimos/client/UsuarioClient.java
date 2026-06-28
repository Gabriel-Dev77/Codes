package com.biblioteca.emprestimos.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

@Component
public class UsuarioClient {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${usuarios.service.url}")
    private String usuariosServiceUrl;

    public void verificarUsuarioExiste(Long usuarioId) {
        String url = usuariosServiceUrl + "/usuarios/" + usuarioId + "/existe";
        try {
            ResponseEntity<Boolean> response = restTemplate.getForEntity(url, Boolean.class);
            Boolean existe = response.getBody();
            if (existe == null || !existe) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Usuário com id " + usuarioId + " não encontrado no sistema");
            }
        } catch (HttpClientErrorException.NotFound e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Usuário com id " + usuarioId + " não encontrado no sistema");
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE,
                    "Microsserviço de Usuários indisponível. Verifique se está rodando na porta 8081.");
        }
    }
}
