package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.dto.DemandeReparationDTO;
import org.ibrahim.gestionreparation.exception.ClientNotFoundException;
import org.ibrahim.gestionreparation.model.DemandeReparation;
import org.ibrahim.gestionreparation.repository.AppareilRepository;
import org.ibrahim.gestionreparation.repository.ClientRepository;
import org.ibrahim.gestionreparation.repository.DemandeReparationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeReparationService {

    private final DemandeReparationRepository demandeReparationRepository;
    private final ClientRepository clientRepository;
    private final AppareilRepository appareilRepository;

    @Autowired
    public DemandeReparationService(DemandeReparationRepository demandeReparationRepository, ClientRepository clientRepository, AppareilRepository appareilRepository) {
        this.demandeReparationRepository = demandeReparationRepository;
        this.clientRepository = clientRepository;
        this.appareilRepository = appareilRepository;
    }

    public DemandeReparationDTO convertToDTO(DemandeReparation demande) {
        DemandeReparationDTO dto = new DemandeReparationDTO();
        dto.setId(demande.getId());
        dto.setClientId(demande.getClient().getId());
        dto.setAppareilId(demande.getAppareil().getId());
        dto.setDateDepotAppareil(demande.getDateDepotAppareil());
        dto.setDatePreuveRep(demande.getDatePreuveRep());
        dto.setEtat(demande.getEtat());
        dto.setSymptomesPanne(demande.getSymptomesPanne());
        return dto;
    }

    public DemandeReparation convertFromDTO(DemandeReparationDTO dto) {
        DemandeReparation demande = new DemandeReparation();
        demande.setId(dto.getId());
        demande.setClient(clientRepository.findById(dto.getClientId())
                .orElseThrow(() -> new ClientNotFoundException("Client not found with ID: " + dto.getClientId())));
        demande.setAppareil(appareilRepository.findById(dto.getAppareilId())
                .orElseThrow(() -> new IllegalArgumentException("Appareil not found with ID: " + dto.getAppareilId())));
        demande.setDateDepotAppareil(dto.getDateDepotAppareil());
        demande.setDatePreuveRep(dto.getDatePreuveRep());
        demande.setEtat(dto.getEtat());
        demande.setSymptomesPanne(dto.getSymptomesPanne());
        return demande;
    }


    // Create or update a demande de reparation
    public DemandeReparation saveDemandeReparation(DemandeReparation demandeReparation) {
        return demandeReparationRepository.save(demandeReparation);
    }

    // Get all demandes de reparation
    public List<DemandeReparation> getAllDemandesReparation() {
        return demandeReparationRepository.findAll();
    }

    // Get demande de reparation by ID
    public Optional<DemandeReparation> getDemandeReparationById(Long id) {
        return demandeReparationRepository.findById(id);
    }

    // Delete a demande de reparation by ID
    public void deleteDemandeReparation(Long id) {
        demandeReparationRepository.deleteById(id);
    }
    public List<DemandeReparation> getDemandesReparationByClientId(Long clientId) {
        return demandeReparationRepository.findByClientId(clientId);
    }
}
