package org.ibrahim.gestionreparation.controller;

import org.ibrahim.gestionreparation.model.ReparationPiece;
import org.ibrahim.gestionreparation.service.ReparationPieceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reparation-pieces")
@CrossOrigin(origins = "http://localhost:3000")
public class ReparationPieceController {

    @Autowired
    private ReparationPieceService reparationPieceService;

    // Create a new ReparationPiece
    @PostMapping
    public ResponseEntity<ReparationPiece> createReparationPiece(@RequestBody ReparationPiece reparationPiece) {
        ReparationPiece savedReparationPiece = reparationPieceService.saveReparationPiece(reparationPiece);
        return ResponseEntity.ok(savedReparationPiece);
    }

    // Get all ReparationPieces
    @GetMapping
    public ResponseEntity<List<ReparationPiece>> getAllReparationPieces() {
        List<ReparationPiece> reparationPieces = reparationPieceService.getAllReparationPieces();
        return ResponseEntity.ok(reparationPieces);
    }

    // Delete a ReparationPiece by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReparationPiece(@PathVariable Long id) {
        reparationPieceService.deleteReparationPiece(id);
        return ResponseEntity.noContent().build();
    }
}
