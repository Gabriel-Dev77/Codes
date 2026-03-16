package tarefa;

import java.io.*;
import java.net.*;

public class SocketClient {

    public static void startClient() {

        String servidor = "127.0.0.1";
        int porta = 12345;

        try (Socket socket = new Socket()) {

            socket.connect(new InetSocketAddress(servidor, porta), 30000);

            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            out.println("Hello " + servidor);

            String resposta = in.readLine();

            System.out.println("Resposta do servidor: " + resposta);

            socket.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
