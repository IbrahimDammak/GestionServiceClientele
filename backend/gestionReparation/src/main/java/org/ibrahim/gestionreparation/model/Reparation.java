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

    private LocalDate dateRep;

    private String description;

    private double tarifHMO;

    private double tempsMO;

    @OneToOne
    @JoinColumn(name = "type_piece_id", referencedColumnName = "id")
    private TypePiece typePiece;

    @ManyToOne
    @JoinColumn(name = "piece_recharge_id", referencedColumnName = "id")
    private PieceRechange pieceRechange;

    private int qte;

}
