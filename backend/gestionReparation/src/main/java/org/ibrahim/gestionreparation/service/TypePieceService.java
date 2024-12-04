package org.ibrahim.gestionreparation.service;

import org.ibrahim.gestionreparation.model.TypePiece;
import org.ibrahim.gestionreparation.repository.TypePieceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypePieceService {

    private final TypePieceRepository typePieceRepository;

    @Autowired
    public TypePieceService(TypePieceRepository typePieceRepository) {
        this.typePieceRepository = typePieceRepository;
    }

    // Create or update a type de piece
    public TypePiece saveTypePiece(TypePiece typePiece) {
        return typePieceRepository.save(typePiece);
    }

    // Get all types de pieces
    public List<TypePiece> getAllTypePieces() {
        return typePieceRepository.findAll();
    }

    // Get type de piece by ID
    public Optional<TypePiece> getTypePieceById(Long id) {
        return typePieceRepository.findById(id);
    }

    // Delete a type de piece by ID
    public void deleteTypePiece(Long id) {
        typePieceRepository.deleteById(id);
    }
}
