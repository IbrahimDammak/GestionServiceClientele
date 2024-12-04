package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Entity
@Table(name = "demandes_reparation")
@Data
public class DemandeReparation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;  // Relationship with Client

    @Column(nullable = false)
    private Date dateDepotAppareil;

    @Column(nullable = false)
    private Date datePreuveRep;

    @Column(nullable = false)
    private String etat;

    @Column(nullable = false)
    private String symptomesPanne;
}
