package com.example.TopIt.repository;

import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.Teams;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeamsRepository extends JpaRepository<Teams,Long> {
    void deleteTeamById(Long id);

    Optional<Teams> findTeamById(Long id);
}