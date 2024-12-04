package org.ibrahim.gestionreparation.repository;

import org.ibrahim.gestionreparation.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
