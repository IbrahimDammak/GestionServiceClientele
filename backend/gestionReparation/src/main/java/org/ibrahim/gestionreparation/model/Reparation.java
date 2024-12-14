package org.ibrahim.gestionreparation.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;



@Entity
@Table(name = "reparations")
@Data
public class Reparation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate dateRep;

    @Column(nullable = false)
    private String description;

    private double tarifHMO = 15;

    @Column(nullable = false)
    private double tempsMO;

    @OneToOne
    @JoinColumn(name = "demande_reparation_id", nullable = false)
    @JsonManagedReference // Prevent recursion from this side
    private DemandeReparation demandeReparation;

    @OneToMany(mappedBy = "reparation", cascade = CascadeType.ALL)
    @JsonManagedReference // Manage serialization for pieces
    private List<ReparationPiece> reparationPieces = new ArrayList<>();
}

