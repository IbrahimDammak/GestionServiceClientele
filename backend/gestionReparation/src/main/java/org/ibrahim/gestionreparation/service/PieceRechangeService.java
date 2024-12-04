package org.ibrahim.gestionreparation.service;


import org.ibrahim.gestionreparation.model.PieceRechange;
import org.ibrahim.gestionreparation.repository.PieceRechangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PieceRechangeService {

    private final PieceRechangeRepository pieceRechangeRepository;

    @Autowired
    public PieceRechangeService(PieceRechangeRepository pieceRechangeRepository) {
        this.pieceRechangeRepository = pieceRechangeRepository;
    }

    // Create or update a piece de rechange
    public PieceRechange savePieceRechange(PieceRechange pieceRechange) {
        return pieceRechangeRepository.save(pieceRechange);
    }

    // Get all pieces de rechange
    public List<PieceRechange> getAllPiecesRechange() {
        return pieceRechangeRepository.findAll();
    }

    // Get piece de rechange by ID
    public Optional<PieceRechange> getPieceRechangeById(Long id) {
        return pieceRechangeRepository.findById(id);
    }

    // Delete a piece de rechange by ID
    public void deletePieceRechange(Long id) {
        pieceRechangeRepository.deleteById(id);
    }
}