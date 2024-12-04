package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name = "factures")
@Data
public class Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "demande_reparation_id", nullable = false)
    private DemandeReparation demandeReparation;  // Relationship with DemandeReparation

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private Double montantTotal;

    @Column(nullable = false)
    private String numero;
}