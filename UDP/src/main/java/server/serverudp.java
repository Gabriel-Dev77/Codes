package server;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class serverudp {
	public static void main(String[] args) {
		DatagramSocket socket = null;

		try {

			socket = new DatagramSocket(9876);
			System.out.println("Servidor UDP iniciado na porta 9876...");

			byte[] receiveData = new byte[1024];
			byte[] sendData;

			while (true) {
				DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
				socket.receive(receivePacket);

				String message = new String(receivePacket.getData(), 0, receivePacket.getLength());
				System.out.println("Mensagem recebida: " + message);

				String[] numbers = message.split(",");
				if (numbers.length == 2) {
					try {
						double num1 = Double.parseDouble(numbers[0].trim());
						double num2 = Double.parseDouble(numbers[1].trim());

						double result = num1 - num2;
						String response = String.valueOf(result);

						InetAddress clientAddress = receivePacket.getAddress();
						int clientPort = receivePacket.getPort();
						sendData = response.getBytes();

						DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, clientAddress,
								clientPort);
						socket.send(sendPacket);

						System.out.println("Resultado enviado: " + response);
					} catch (NumberFormatException e) {
						String errorMsg = "Erro: formato de número inválido";
						sendData = errorMsg.getBytes();

						DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length,
								receivePacket.getAddress(), receivePacket.getPort());
						socket.send(sendPacket);
					}
				} else {
					String errorMsg = "Erro: envie exatamente dois números separados por vírgula";
					sendData = errorMsg.getBytes();

					DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length,
							receivePacket.getAddress(), receivePacket.getPort());
					socket.send(sendPacket);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (socket != null && !socket.isClosed()) {
				socket.close();
			}
		}
	}
}