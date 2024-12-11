package org.ibrahim.gestionreparation.controller;

import org.ibrahim.gestionreparation.model.TypePiece;
import org.ibrahim.gestionreparation.service.TypePieceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/typepieces")
@CrossOrigin(origins = "http://localhost:3000")
public class TypePieceController {

    @Autowired
    private TypePieceService typePieceService;

    // Get all TypePieces
    @GetMapping
    public ResponseEntity<List<TypePiece>> getAllTypePieces() {
        List<TypePiece> typePieces = typePieceService.getAllTypePieces();
        return ResponseEntity.ok(typePieces);
    }

    // Get a TypePiece by ID
    @GetMapping("/{id}")
    public ResponseEntity<TypePiece> getTypePieceById(@PathVariable Long id) {
        TypePiece typePiece = typePieceService.getTypePieceById(id);
        return ResponseEntity.ok(typePiece);
    }

    // Create a new TypePiece
    @PostMapping
    public ResponseEntity<TypePiece> createTypePiece(@RequestBody TypePiece typePiece) {
        TypePiece savedTypePiece = typePieceService.saveTypePiece(typePiece);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTypePiece);
    }

    // Update a TypePiece
    @PutMapping("/{id}")
    public ResponseEntity<TypePiece> updateTypePiece(@PathVariable Long id, @RequestBody TypePiece typePiece) {
        TypePiece updatedTypePiece = typePieceService.updateTypePiece(id, typePiece);
        return ResponseEntity.ok(updatedTypePiece);
    }

    // Delete a TypePiece
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTypePiece(@PathVariable Long id) {
        typePieceService.deleteTypePiece(id);
        return ResponseEntity.noContent().build();
    }
}
