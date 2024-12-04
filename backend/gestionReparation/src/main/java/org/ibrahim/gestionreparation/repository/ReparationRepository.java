package org.ibrahim.gestionreparation.repository;

import org.ibrahim.gestionreparation.model.Reparation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReparationRepository extends JpaRepository<Reparation, Long> {
}
