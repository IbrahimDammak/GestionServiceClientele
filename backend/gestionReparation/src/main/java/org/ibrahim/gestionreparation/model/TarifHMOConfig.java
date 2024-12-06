package org.ibrahim.gestionreparation.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class TarifHMOConfig {
    @Id
    private int id;
    @Column(unique=true, nullable=false)
    private double tarifHMO;
}
