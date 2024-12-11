package org.ibrahim.gestionreparation.controller;

import org.ibrahim.gestionreparation.model.Facture;
import org.ibrahim.gestionreparation.service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/factures")
@CrossOrigin(origins = "http://localhost:3000")
public class FactureController {

    private final FactureService factureService;

    @Autowired
    public FactureController(FactureService factureService) {
        this.factureService = factureService;
    }

//    // Create or update a facture
//    @PostMapping
//    public ResponseEntity<Facture> saveFacture(@RequestBody Facture facture) {
//        Facture savedFacture = factureService.saveFacture(facture);
//        return new ResponseEntity<>(savedFacture, HttpStatus.CREATED);
//    }

    @PostMapping
    public ResponseEntity<Facture> createFacture(@RequestBody Facture facture) {
        Facture savedFacture = factureService.createFacture(facture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFacture);
    }


    // Get all factures
    @GetMapping
    public ResponseEntity<List<Facture>> getAllFactures() {
        List<Facture> factures = factureService.getAllFactures();
        return new ResponseEntity<>(factures, HttpStatus.OK);
    }

    // Get facture by ID
    @GetMapping("/{id}")
    public ResponseEntity<Facture> getFactureById(@PathVariable Long id) {
        Optional<Facture> facture = factureService.getFactureById(id);
        return facture.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a facture
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFacture(@PathVariable Long id) {
        factureService.deleteFacture(id);
        return ResponseEntity.noContent().build();
    }
}