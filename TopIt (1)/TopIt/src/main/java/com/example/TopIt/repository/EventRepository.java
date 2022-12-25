package com.example.TopIt.repository;

import com.example.TopIt.models.Events;
import com.example.TopIt.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EventRepository extends JpaRepository<Events,Long> {

    void deleteEventById(Long id);

    Optional<Events> findEventById(Long id);
}
