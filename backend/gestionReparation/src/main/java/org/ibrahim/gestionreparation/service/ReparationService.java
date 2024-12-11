package org.ibrahim.gestionreparation.service;

import jakarta.persistence.EntityNotFoundException;
import org.ibrahim.gestionreparation.model.Reparation;
import org.ibrahim.gestionreparation.model.TypePiece;
import org.ibrahim.gestionreparation.repository.ReparationRepository;
import org.ibrahim.gestionreparation.repository.TypePieceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReparationService {

    private final ReparationRepository reparationRepository;
    private final TypePieceRepository typePieceRepository;

    @Autowired
    public ReparationService(ReparationRepository reparationRepository, TypePieceRepository typePieceRepository) {
        this.reparationRepository = reparationRepository;
        this.typePieceRepository = typePieceRepository;
    }

    // Create or update a reparation
    public Reparation saveReparation(Reparation reparation) {
        // Save the Reparation
        return reparationRepository.save(reparation);
    }

    // Get all reparations
    public List<Reparation> getAllReparations() {
        return reparationRepository.findAll();
    }

    // Get reparation by ID
    public Optional<Reparation> getReparationById(Long id) {
        return reparationRepository.findById(id);
    }

    // Delete a reparation by ID
    public void deleteReparation(Long id) {
        reparationRepository.deleteById(id);
    }
    public Reparation saveReparationWithTarif(Reparation reparation) {
        return reparationRepository.save(reparation);
    }
}
