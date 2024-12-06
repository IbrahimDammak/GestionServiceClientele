package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "types_pieces")
@Data
public class TypePiece {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @JoinColumn(name = "piece_rechange_id")
    private List<PieceRechange> pieceRechange;

    @Column(nullable = false)
    private Double tarifH;

    @Column(nullable = false)
    private String type;


}