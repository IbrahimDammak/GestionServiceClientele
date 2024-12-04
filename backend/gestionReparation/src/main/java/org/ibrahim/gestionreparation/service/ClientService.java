package org.ibrahim.gestionreparation.service;

import org.ibrahim.gestionreparation.model.Client;
import org.ibrahim.gestionreparation.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    // Create or update a client
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    // Get all clients
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    // Get client by ID
    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    // Delete a client by ID
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
