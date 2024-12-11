package org.ibrahim.gestionreparation.repository;

import org.ibrahim.gestionreparation.model.DemandeReparation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeReparationRepository extends JpaRepository<DemandeReparation, Long> {
    List<DemandeReparation> findByClientId(Long clientId);
}
