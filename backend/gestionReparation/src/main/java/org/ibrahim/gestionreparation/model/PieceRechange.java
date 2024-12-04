package org.ibrahim.gestionreparation.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "pieces_rechange")
@Data
public class PieceRechange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "type_piece_id", nullable = false)
    private TypePiece typePiece;  // Relationship with TypePiece

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private Double prixAchat;

    @Column(nullable = false)
    private Double prixHT;

    @Column(nullable = false)
    private Double prixTTC;

    @Column(nullable = false)
    private Integer qte;
}