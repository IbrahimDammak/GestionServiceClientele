package org.ibrahim.gestionreparation.service;

import jakarta.persistence.EntityNotFoundException;
import org.ibrahim.gestionreparation.dto.DemandeReparationDTO;
import org.ibrahim.gestionreparation.dto.ReparationDTO;
import org.ibrahim.gestionreparation.dto.ReparationPieceDTO;
import org.ibrahim.gestionreparation.exception.ClientNotFoundException;
import org.ibrahim.gestionreparation.model.*;
import org.ibrahim.gestionreparation.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReparationService {

    private final ReparationRepository reparationRepository;
    private final TypePieceRepository typePieceRepository;
    private final ClientRepository clientRepository;
    private final AppareilRepository appareilRepository;
    private final DemandeReparationRepository demandeReparationRepository;
    private final PieceRechangeRepository pieceRechangeRepository;

    @Autowired
    public ReparationService(ReparationRepository reparationRepository, TypePieceRepository typePieceRepository, ClientRepository clientRepository, AppareilRepository appareilRepository, DemandeReparationRepository demandeReparationRepository, PieceRechangeRepository pieceRechangeRepository) {
        this.reparationRepository = reparationRepository;
        this.typePieceRepository = typePieceRepository;
        this.clientRepository = clientRepository;
        this.appareilRepository = appareilRepository;
        this.demandeReparationRepository = demandeReparationRepository;
        this.pieceRechangeRepository = pieceRechangeRepository;
    }

    public ReparationDTO convertToDTO(Reparation reparation) {
        ReparationDTO dto = new ReparationDTO();

        // Set basic fields
        dto.setDescription(reparation.getDescription());
        dto.setTempsMO(reparation.getTempsMO());
        dto.setDemandeReparationId(reparation.getDemandeReparation().getId());

        // Map reparationPieces
        List<ReparationPieceDTO> reparationPieces = reparation.getReparationPieces().stream().map(piece -> {
            ReparationPieceDTO pieceDTO = new ReparationPieceDTO(); // Correct DTO instantiation
            pieceDTO.setPieceRechangeId(piece.getPiecerechange().getId()); // Use correct getter
            return pieceDTO;
        }).collect(Collectors.toList());

        dto.setReparationPieces(reparationPieces); // Set the mapped pieces

        return dto;
    }


    public Reparation convertFromDTO(ReparationDTO dto) {
        Reparation reparation = new Reparation();
        reparation.setDescription(dto.getDescription());
        reparation.setTempsMO(dto.getTempsMO());
        reparation.setDateRep(LocalDate.now()); // Set dateRep to the current system date
        reparation.setDemandeReparation(demandeReparationRepository.findById(dto.getDemandeReparationId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid DemandeReparation ID")));

        List<ReparationPiece> pieces = dto.getReparationPieces().stream().map(pieceDTO -> {
            ReparationPiece piece = new ReparationPiece();
            piece.setPiecerechange(pieceRechangeRepository.findById(pieceDTO.getPieceRechangeId())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid PieceRechange ID")));
            piece.setQte(pieceDTO.getQuantity());
            piece.setReparation(reparation);
            return piece;
        }).collect(Collectors.toList());

        reparation.setReparationPieces(pieces);
        return reparation;
    }




    public Reparation saveReparation(Reparation reparation) {
        Optional<Reparation> existingReparation = reparationRepository.findByDemandeReparationId(reparation.getDemandeReparation().getId());
        if (existingReparation.isPresent()) {
            throw new IllegalStateException("Reparation already exists for DemandeReparation ID: " + reparation.getDemandeReparation().getId());
        }
        return reparationRepository.save(reparation);
    }


    // Get all reparations
    public List<Reparation> getAllReparations() {
        return reparationRepository.findAll();
    }

    // Get reparation by ID
    public Optional<Reparation> getReparationById(Long id) {
        return reparationRepository.findById(id);
    }

    // Delete a reparation by ID
    public void deleteReparation(Long id) {
        reparationRepository.deleteById(id);
    }
    public Reparation saveReparationWithTarif(Reparation reparation) {
        return reparationRepository.save(reparation);
    }
}
