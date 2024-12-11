package org.ibrahim.gestionreparation.model;


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

    private double tarifHMO = 15 ;

    @Column(nullable = false)
    private double tempsMO;

    @OneToOne
    @JoinColumn(name = "demande_Reparation_id", nullable = false)
    private DemandeReparation demandeReparation;

    @OneToMany(mappedBy = "reparation", cascade = CascadeType.ALL)
    private List<ReparationPiece> reparationPieces;

}
