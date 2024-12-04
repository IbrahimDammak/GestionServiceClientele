package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.model.Facture;
import org.ibrahim.gestionreparation.repository.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FactureService {

    private final FactureRepository factureRepository;

    @Autowired
    public FactureService(FactureRepository factureRepository) {
        this.factureRepository = factureRepository;
    }

    // Create or update a facture
    public Facture saveFacture(Facture facture) {
        return factureRepository.save(facture);
    }

    // Get all factures
    public List<Facture> getAllFactures() {
        return factureRepository.findAll();
    }

    // Get facture by ID
    public Optional<Facture> getFactureById(Long id) {
        return factureRepository.findById(id);
    }

    // Delete a facture by ID
    public void deleteFacture(Long id) {
        factureRepository.deleteById(id);
    }
}