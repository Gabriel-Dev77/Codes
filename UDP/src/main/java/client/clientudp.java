package client;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class clientudp {
	public static void main(String[] args) {
		DatagramSocket clientSocket = null;

		try {

			clientSocket = new DatagramSocket();

			clientSocket.setSoTimeout(30000);

			InetAddress serverAddress = InetAddress.getByName("localhost");

			try (Scanner scanner = new Scanner(System.in)) {
				System.out.print("Digite o primeiro número: ");
				String num1 = scanner.nextLine();
				System.out.print("Digite o segundo número: ");
				String num2 = scanner.nextLine();

				String message = num1 + "," + num2;
				byte[] sendData = message.getBytes();

				DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, serverAddress, 9876);

				System.out.println("Enviando números: " + num1 + " e " + num2);
				clientSocket.send(sendPacket);
			}
			byte[] receiveData = new byte[1024];
			DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);

			System.out.println("Aguardando resposta do servidor...");
			clientSocket.receive(receivePacket);

			String response = new String(receivePacket.getData(), 0, receivePacket.getLength());
			System.out.println("Resultado da subtração: " + response);

		} catch (java.net.SocketTimeoutException e) {
			System.out.println("Timeout: O servidor não respondeu em 30 segundos.");
		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
			e.printStackTrace();
		} finally {

			if (clientSocket != null && !clientSocket.isClosed()) {
				clientSocket.close();
				System.out.println("Cliente encerrado.");
			}
		}
	}
}