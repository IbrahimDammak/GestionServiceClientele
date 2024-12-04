package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.model.DemandeReparation;
import org.ibrahim.gestionreparation.repository.DemandeReparationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeReparationService {

    private final DemandeReparationRepository demandeReparationRepository;

    @Autowired
    public DemandeReparationService(DemandeReparationRepository demandeReparationRepository) {
        this.demandeReparationRepository = demandeReparationRepository;
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
}
