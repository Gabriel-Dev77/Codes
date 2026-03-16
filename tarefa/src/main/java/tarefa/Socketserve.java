package tarefa;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Socketserve {

	public static void startServer() throws IOException {
		try(ServerSocket serversocket = new ServerSocket(12345)) {
			System.out.println("Servidor iniciando...");
			
			while(true) {
				 Socket socket = serversocket.accept();
				 
				 BufferedReader in = new BufferedReader(
						 new InputStreamReader(socket.getInputStream()));
				 
				 PrintWriter out = new PrintWriter(
				socket.getOutputStream(), true);
				 
				String mensagem = in.readLine();
				String ipCliente = socket.getInetAddress().getHostAddress();
				
				System.out.println("Recebido: " + mensagem);
				
				out.println("HELLO" + ipCliente);
				
				socket.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
