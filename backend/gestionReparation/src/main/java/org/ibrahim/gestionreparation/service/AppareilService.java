package org.ibrahim.gestionreparation.service;

import org.ibrahim.gestionreparation.dto.AppareilDTO;
import org.ibrahim.gestionreparation.exception.ClientNotFoundException;
import org.ibrahim.gestionreparation.model.Appareil;
import org.ibrahim.gestionreparation.model.Client;
import org.ibrahim.gestionreparation.repository.AppareilRepository;
import org.ibrahim.gestionreparation.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppareilService {

    private final AppareilRepository appareilRepository;
    private final ClientRepository clientRepository;

    @Autowired
    public AppareilService(AppareilRepository appareilRepository, ClientRepository clientRepository) {
        this.appareilRepository = appareilRepository;
        this.clientRepository = clientRepository;
    }


    public AppareilDTO convertToDTO(Appareil appareil) {
        AppareilDTO dto = new AppareilDTO();
        dto.setId(appareil.getId());
        dto.setClientId(appareil.getClient().getId());
        dto.setMarque(appareil.getMarque());
        dto.setModele(appareil.getModele());
        dto.setNumSerie(appareil.getNumSerie());
        return dto;
    }

    public Appareil convertFromDTO(AppareilDTO dto) {
        Appareil appareil = new Appareil();
        appareil.setId(dto.getId());
        appareil.setMarque(dto.getMarque());
        appareil.setModele(dto.getModele());
        appareil.setNumSerie(dto.getNumSerie());
        appareil.setClient(clientRepository.findById(dto.getClientId())
                .orElseThrow(() -> new ClientNotFoundException("Client not found with ID: " + dto.getClientId())));
        return appareil;
    }



    // Create or update an appareil
    public Appareil saveAppareil(Appareil appareil) {
        // Ensure that the client is not null before accessing its properties
        if (appareil.getClient() == null) {
            throw new ClientNotFoundException("Client information is missing for the appareil.");
        }

        // Check if the client exists in the database
        Client client = clientRepository.findById(appareil.getClient().getId())
                .orElseThrow(() -> new ClientNotFoundException("Client with ID " + appareil.getClient().getId() + " not found"));

        // Set the client to the appareil
        appareil.setClient(client);

        return appareilRepository.save(appareil);
    }
    // Get all appareils
    public List<Appareil> getAllAppareils() {
        return appareilRepository.findAll();
    }

    // Get appareil by ID
    public Optional<Appareil> getAppareilById(Long id) {
        return appareilRepository.findById(id);
    }

    // Delete an appareil by ID
    public void deleteAppareil(Long id) {
        appareilRepository.deleteById(id);
    }
}