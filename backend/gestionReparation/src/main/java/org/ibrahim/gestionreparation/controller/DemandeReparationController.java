package org.ibrahim.gestionreparation.controller;


import org.ibrahim.gestionreparation.model.DemandeReparation;
import org.ibrahim.gestionreparation.service.DemandeReparationService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/demandes-reparation")
@CrossOrigin(origins = "http://localhost:3000")
public class DemandeReparationController {

    private final DemandeReparationService demandeReparationService;

    @Autowired
    public DemandeReparationController(DemandeReparationService demandeReparationService) {
        this.demandeReparationService = demandeReparationService;
    }

    // Create or update a demande de reparation
    @PostMapping
    public ResponseEntity<DemandeReparation> saveDemandeReparation(@RequestBody DemandeReparation demandeReparation) {
        DemandeReparation savedDemande = demandeReparationService.saveDemandeReparation(demandeReparation);
        return new ResponseEntity<>(savedDemande, HttpStatus.CREATED);
    }

    // Get all demandes de reparation
    @GetMapping
    public ResponseEntity<List<DemandeReparation>> getAllDemandesReparation() {
        List<DemandeReparation> demandes = demandeReparationService.getAllDemandesReparation();
        return new ResponseEntity<>(demandes, HttpStatus.OK);
    }

    // Get demande de reparation by ID
    @GetMapping("/{id}")
    public ResponseEntity<DemandeReparation> getDemandeReparationById(@PathVariable Long id) {
        Optional<DemandeReparation> demandeReparation = demandeReparationService.getDemandeReparationById(id);
        return demandeReparation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a demande de reparation
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDemandeReparation(@PathVariable Long id) {
        demandeReparationService.deleteDemandeReparation(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<DemandeReparation>> getDemandesReparationByClientId(@PathVariable Long clientId) {
        List<DemandeReparation> demandes = demandeReparationService.getDemandesReparationByClientId(clientId);
        if (demandes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(demandes, HttpStatus.OK);
    }
}