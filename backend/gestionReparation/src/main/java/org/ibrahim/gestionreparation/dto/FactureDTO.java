package org.ibrahim.gestionreparation.dto;

import lombok.Data;

@Data
public class FactureDTO {
    private Long id;
    private String numero;
    private double montantTotal;
    private Long reparationId; // Simplified reference to Reparation
}