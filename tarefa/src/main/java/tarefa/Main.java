package tarefa;

import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        new Thread(() -> {
			try {
				Socketserve.startServer();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}).start();

        try {
            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        }

        SocketClient.startClient();
    }
}