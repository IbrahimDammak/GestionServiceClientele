package org.ibrahim.gestionreparation.dto;

import lombok.Data;

@Data
public class ReparationPieceDTO {

    private Long pieceRechangeId; // ID of the associated PieceRechange
    private int quantity;         // Quantity of the piece used
}