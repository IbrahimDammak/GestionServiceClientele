package org.ibrahim.gestionreparation.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "types_pieces")
@Data
public class TypePiece {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String tarifH;

    @Column(nullable = false)
    private String type;
}