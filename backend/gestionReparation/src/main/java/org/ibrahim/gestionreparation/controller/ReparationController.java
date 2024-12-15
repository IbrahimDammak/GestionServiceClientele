package org.ibrahim.gestionreparation.controller;


import org.ibrahim.gestionreparation.dto.ReparationDTO;
import org.ibrahim.gestionreparation.model.Reparation;
import org.ibrahim.gestionreparation.service.ReparationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reparations")
@CrossOrigin(origins = "http://localhost:3000")
public class ReparationController {

    private final ReparationService reparationService;

    @Autowired
    public ReparationController(ReparationService reparationService) {
        this.reparationService = reparationService;
    }

    // Create or update a reparation

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveReparation(@RequestBody ReparationDTO reparationDTO) {
        try {
            Reparation reparation = reparationService.convertFromDTO(reparationDTO);
            Reparation savedReparation = reparationService.saveReparation(reparation);
            return ResponseEntity.status(HttpStatus.CREATED).body(reparationService.convertToDTO(savedReparation));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
  


    // Get all reparations
    @GetMapping
    public ResponseEntity<List<Reparation>> getAllReparations() {
        List<Reparation> reparations = reparationService.getAllReparations();
        return new ResponseEntity<>(reparations, HttpStatus.OK);
    }

    // Get reparation by ID
    @GetMapping("/{id}")
    public ResponseEntity<Reparation> getReparationById(@PathVariable Long id) {
        Optional<Reparation> reparation = reparationService.getReparationById(id);
        return reparation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a reparation
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReparation(@PathVariable Long id) {
        reparationService.deleteReparation(id);
        return ResponseEntity.noContent().build();
    }
}