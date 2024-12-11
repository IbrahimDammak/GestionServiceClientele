package org.ibrahim.gestionreparation.controller;

import org.ibrahim.gestionreparation.model.Appareil;
import org.ibrahim.gestionreparation.model.DemandeReparation;
import org.ibrahim.gestionreparation.service.AppareilService;
import org.ibrahim.gestionreparation.service.DemandeReparationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appareils")
@CrossOrigin(origins = "http://localhost:3000")
public class AppareilController {

    private final AppareilService appareilService;
    private final DemandeReparationService demandeReparationService;

    @Autowired
    public AppareilController(AppareilService appareilService, DemandeReparationService demandeReparationService) {
        this.appareilService = appareilService;
        this.demandeReparationService = demandeReparationService;
    }

    // Create or update an appareil
//    @PreAuthorize("hasRole('TECHNICIAN')")
    @PostMapping
    public ResponseEntity<Appareil> saveAppareil(@RequestBody Appareil appareil) {
        return ResponseEntity.status(HttpStatus.CREATED).body(appareilService.saveAppareil(appareil));
    }

    // Get all appareils
    @GetMapping
    public ResponseEntity<List<Appareil>> getAllAppareils() {
        List<Appareil> appareils = appareilService.getAllAppareils();
        return new ResponseEntity<>(appareils, HttpStatus.OK);
    }

    @GetMapping("/etat-appareil")
    public ResponseEntity<List<DemandeReparation>> getEtatLaptopByClientIdFromReparation() {
        List<DemandeReparation> demandes = demandeReparationService.getAllDemandesReparation();
        if (demandes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(demandes, HttpStatus.OK);
    }

    // Get appareil by ID
    @GetMapping("/{id}")
    public ResponseEntity<Appareil> getAppareilById(@PathVariable Long id) {
        Optional<Appareil> appareil = appareilService.getAppareilById(id);
        return appareil.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete an appareil
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppareil(@PathVariable Long id) {
        appareilService.deleteAppareil(id);
        return ResponseEntity.noContent().build();
    }
}