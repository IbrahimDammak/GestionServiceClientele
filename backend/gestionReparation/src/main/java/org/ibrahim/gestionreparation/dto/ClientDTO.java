package org.ibrahim.gestionreparation.dto;

import lombok.Data;

@Data
public class ClientDTO {
    private Long id;
    private String nom;
    private String adresse;
    private String numTel;
}