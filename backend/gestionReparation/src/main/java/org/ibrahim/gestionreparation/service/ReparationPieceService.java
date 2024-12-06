package org.ibrahim.gestionreparation.service;

import jakarta.persistence.EntityNotFoundException;
import org.ibrahim.gestionreparation.model.PieceRechange;
import org.ibrahim.gestionreparation.model.Reparation;
import org.ibrahim.gestionreparation.model.ReparationPiece;
import org.ibrahim.gestionreparation.repository.PieceRechangeRepository;
import org.ibrahim.gestionreparation.repository.ReparationPieceRepository;
import org.ibrahim.gestionreparation.repository.ReparationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReparationPieceService {

    @Autowired
    private ReparationPieceRepository reparationPieceRepository;

    @Autowired
    private ReparationRepository reparationRepository;

    @Autowired
    private PieceRechangeRepository pieceRechangeRepository;

    // Save a ReparationPiece
    public ReparationPiece saveReparationPiece(Long reparationId, Long pieceRechangeId) {
        Reparation reparation = reparationRepository.findById(reparationId)
                .orElseThrow(() -> new EntityNotFoundException("Reparation not found"));
        PieceRechange pieceRechange = pieceRechangeRepository.findById(pieceRechangeId)
                .orElseThrow(() -> new EntityNotFoundException("PieceRechange not found"));

        ReparationPiece reparationPiece = new ReparationPiece();
        reparationPiece.setReparation(reparation);
        reparationPiece.setPiecerechange(pieceRechange);

        return reparationPieceRepository.save(reparationPiece);
    }

    // Get all ReparationPieces
    public List<ReparationPiece> getAllReparationPieces() {
        return reparationPieceRepository.findAll();
    }

    // Delete a ReparationPiece
    public void deleteReparationPiece(Long id) {
        if (!reparationPieceRepository.existsById(id)) {
            throw new EntityNotFoundException("ReparationPiece not found");
        }
        reparationPieceRepository.deleteById(id);
    }
}

