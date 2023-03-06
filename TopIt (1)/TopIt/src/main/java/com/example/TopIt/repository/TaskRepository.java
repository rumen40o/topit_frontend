package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskRepository extends JpaRepository<Tasks,Long> {

    Optional<Tasks> findTaskById(Long id);
}
