package org.ibrahim.gestionreparation.service;

import jakarta.persistence.EntityNotFoundException;
import org.ibrahim.gestionreparation.model.TypePiece;
import org.ibrahim.gestionreparation.repository.TypePieceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypePieceService {

    @Autowired
    private TypePieceRepository typePieceRepository;

    // Get all TypePieces
    public List<TypePiece> getAllTypePieces() {
        return typePieceRepository.findAll();
    }

    // Get a TypePiece by ID
    public TypePiece getTypePieceById(Long id) {
        return typePieceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("TypePiece not found with ID: " + id));
    }

    // Save a new TypePiece
    public TypePiece saveTypePiece(TypePiece typePiece) {
        // Ensure that associated PieceRechange entities are properly handled
        return typePieceRepository.save(typePiece);
    }

    // Update an existing TypePiece
    public TypePiece updateTypePiece(Long id, TypePiece updatedTypePiece) {
        TypePiece existingTypePiece = getTypePieceById(id);

        // Update the list of PieceRechange if necessary
        existingTypePiece.setPieceRechange(updatedTypePiece.getPieceRechange());

        // Update other fields as needed
        return typePieceRepository.save(existingTypePiece);
    }

    // Delete a TypePiece
    public void deleteTypePiece(Long id) {
        if (!typePieceRepository.existsById(id)) {
            throw new EntityNotFoundException("TypePiece not found with ID: " + id);
        }
        typePieceRepository.deleteById(id);
    }
}
