package org.ibrahim.gestionreparation.dto;

import lombok.Data;

import java.util.Date;

@Data
public class DemandeReparationDTO {
    private Long id;
    private Long clientId; // Simplified reference to Client
    private Long appareilId; // Simplified reference to Appareil
    private Date dateDepotAppareil;
    private Date datePreuveRep;
    private String etat;
    private String symptomesPanne;
}