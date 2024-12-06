package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "factures")
@Data
public class Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private String numero;

    private double montantTotal;

    @OneToOne
    @JoinColumn(name = "reparation_id", referencedColumnName = "id")
    private Reparation reparation;
}