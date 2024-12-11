package org.ibrahim.gestionreparation.controller;

import org.ibrahim.gestionreparation.model.PieceRechange;
import org.ibrahim.gestionreparation.service.PieceRechangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pieces-rechange")
@CrossOrigin(origins = "http://localhost:3000")
public class PieceRechangeController {

    private final PieceRechangeService pieceRechangeService;

    @Autowired
    public PieceRechangeController(PieceRechangeService pieceRechangeService) {
        this.pieceRechangeService = pieceRechangeService;
    }

    // Create or update a piece de rechange
    @PostMapping
    public ResponseEntity<PieceRechange> savePieceRechange(@RequestBody PieceRechange pieceRechange) {
        PieceRechange savedPieceRechange = pieceRechangeService.savePieceRechange(pieceRechange);
        return new ResponseEntity<>(savedPieceRechange, HttpStatus.CREATED);
    }

    // Get all pieces de rechange
    @GetMapping
    public ResponseEntity<List<PieceRechange>> getAllPiecesRechange() {
        List<PieceRechange> pieces = pieceRechangeService.getAllPiecesRechange();
        return new ResponseEntity<>(pieces, HttpStatus.OK);
    }

    // Get piece de rechange by ID
    @GetMapping("/{id}")
    public ResponseEntity<PieceRechange> getPieceRechangeById(@PathVariable Long id) {
        Optional<PieceRechange> pieceRechange = pieceRechangeService.getPieceRechangeById(id);
        return pieceRechange.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a piece de rechange
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePieceRechange(@PathVariable Long id) {
        pieceRechangeService.deletePieceRechange(id);
        return ResponseEntity.noContent().build();
    }
}