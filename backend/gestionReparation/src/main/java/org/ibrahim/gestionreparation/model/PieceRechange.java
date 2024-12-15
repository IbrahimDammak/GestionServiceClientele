package org.ibrahim.gestionreparation.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.context.annotation.Lazy;

import java.util.ArrayList;
import java.util.List;

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


    @OneToMany(mappedBy = "piecerechange", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReparationPiece> reparationPieces;

}