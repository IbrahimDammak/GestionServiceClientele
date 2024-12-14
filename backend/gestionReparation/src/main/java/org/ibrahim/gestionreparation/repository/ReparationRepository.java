package org.ibrahim.gestionreparation.repository;

import org.ibrahim.gestionreparation.model.Reparation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReparationRepository extends JpaRepository<Reparation, Long> {

    Optional<Reparation> findByDemandeReparationId(Long demandeReparationId);
}
