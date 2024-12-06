package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Entity
@Table(name = "PiecesReparations")
@Data
public class ReparationPiece {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "piece_rechange_id", nullable = false)
    private PieceRechange piecerechange;

    @ManyToOne
    @JoinColumn(name = "reparation_id", nullable = false)
    private Reparation reparation;

    @Column(nullable = false)
    private int qte;



}
