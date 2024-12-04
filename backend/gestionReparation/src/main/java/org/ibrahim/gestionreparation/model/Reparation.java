package org.ibrahim.gestionreparation.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "reparations")
@Data
public class Reparation {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "demande_reparation_id", nullable = false)
    private DemandeReparation demandeReparation;  // Relationship with DemandeReparation

    @Column(nullable = false)
    private Date dateRep;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double tarifHMO;

    @Column(nullable = false)
    private Double tempsMO;
}
