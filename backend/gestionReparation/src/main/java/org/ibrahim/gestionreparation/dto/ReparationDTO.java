package org.ibrahim.gestionreparation.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ReparationDTO {

    private String description;
    private double tempsMO;
    private Long demandeReparationId; // Link to an existing DemandeReparation
    private List<ReparationPieceDTO> reparationPieces; // List of pieces with quantity

    @Data
    public static class ReparationPieceDTO {
        private Long id; // Piece ID
        private int qte; // Quantity
    }
}
