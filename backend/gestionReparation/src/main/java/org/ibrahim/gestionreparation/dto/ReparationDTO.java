package org.ibrahim.gestionreparation.dto;

import lombok.Data;
import java.util.List;

@Data
public class ReparationDTO {

    private String description;
    private double tempsMO;
    private Long demandeReparationId; // ID of the associated DemandeReparation
    private List<ReparationPieceDTO> reparationPieces; // List of pieces used

}
