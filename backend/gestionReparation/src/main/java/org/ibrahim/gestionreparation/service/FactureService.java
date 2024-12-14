package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.dto.FactureDTO;
import org.ibrahim.gestionreparation.model.Facture;
import org.ibrahim.gestionreparation.model.Reparation;
import org.ibrahim.gestionreparation.model.ReparationPiece;
import org.ibrahim.gestionreparation.repository.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class FactureService {

    private final FactureRepository factureRepository;
    private final ReparationService reparationService;
    private TypePieceService typePieceService;


    @Autowired
    public FactureService(FactureRepository factureRepository, ReparationService reparationService) {
        this.factureRepository = factureRepository;
        this.reparationService = reparationService;
    }

    public FactureDTO convertToDTO(Facture facture) {
        FactureDTO dto = new FactureDTO();
        dto.setId(facture.getId());
        dto.setNumero(facture.getNumero());
        dto.setMontantTotal(facture.getMontantTotal());
        dto.setReparationId(facture.getReparation().getId());
        return dto;
    }


//    // Create or update a facture
//    public Facture saveFacture(Facture facture) {
//        Double tarifH =  typePieceService.getTypePieceById();
//
//        return factureRepository.save(facture);
//    }

    public Facture createFacture(Facture facture) {
        // Fetch the associated Reparation
        long repId = facture.getReparation().getId();

        Reparation rep = reparationService.getReparationById(repId).get();

        // Retrieve necessary values for calculation
        double tarifHMO = rep.getTarifHMO();
        double tempsMO = rep.getTempsMO();


        List<ReparationPiece> reparationPieces = rep.getReparationPieces();
        double coutP = 0;

        for (ReparationPiece repPiece : reparationPieces) {
            coutP+= (repPiece.getPiecerechange().getPrixTTC() * repPiece.getQte()) + (repPiece.getPiecerechange().getTypePiece().getTarifH()*repPiece.getQte());
        }

        // Calculate the montantTotal
        double montantTotal = coutP + (tarifHMO *tempsMO);

        String num = "N_"+ LocalDate.now().getYear()+"000"+ repId;
        facture.setNumero(num);

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