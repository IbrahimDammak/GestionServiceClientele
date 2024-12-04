package org.ibrahim.gestionreparation.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(String clientNotFound) {
        super(clientNotFound);
    }
}
