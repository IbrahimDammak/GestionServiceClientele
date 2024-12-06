package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.model.Facture;
import org.ibrahim.gestionreparation.model.Reparation;
import org.ibrahim.gestionreparation.repository.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FactureService {

    private final FactureRepository factureRepository;
    private TypePieceService typePieceService;


    @Autowired
    public FactureService(FactureRepository factureRepository) {
        this.factureRepository = factureRepository;
    }

//    // Create or update a facture
//    public Facture saveFacture(Facture facture) {
//        Double tarifH =  typePieceService.getTypePieceById();
//
//        return factureRepository.save(facture);
//    }

    public Facture createFacture(Facture facture) {
        // Fetch the associated Reparation
        Reparation reparation = facture.getReparation();

        if (reparation == null) {
            throw new RuntimeException("Reparation must be associated with a Facture");
        }

        // Retrieve necessary values for calculation
        double tarifH = reparation.getTypePiece().getTarifH();
        double tempsMO = reparation.getTempsMO();
        double tarifHMO = reparation.getTarifHMO();
        double prixTTC = reparation.getPieceRechange().getPrixTTC();
        int qte = reparation.getQte();

        // Calculate the montantTotal
        double montantTotal = (tarifH * qte * tempsMO) + (prixTTC * qte) + (tarifHMO * tempsMO);

        // Set the montantTotal in the Facture
        facture.setMontantTotal(montantTotal);

        // Save the Facture to the database
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