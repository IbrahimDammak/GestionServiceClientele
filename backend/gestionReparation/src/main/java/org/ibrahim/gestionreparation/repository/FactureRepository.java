package org.ibrahim.gestionreparation.repository;

import org.ibrahim.gestionreparation.model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FactureRepository extends JpaRepository<Facture, Long> {
}
