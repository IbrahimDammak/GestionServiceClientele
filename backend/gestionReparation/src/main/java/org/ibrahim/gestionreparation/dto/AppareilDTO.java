package org.ibrahim.gestionreparation.dto;

import lombok.Data;

@Data
public class AppareilDTO {
    private Long id;
    private Long clientId; // Simplified reference to Client
    private String marque;
    private String modele;
    private String numSerie;
}