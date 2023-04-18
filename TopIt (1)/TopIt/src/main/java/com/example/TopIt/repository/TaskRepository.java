package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Tasks,Long> {

    Optional<Tasks> findTaskById(Long id);

    @Query(value = "select name from teams",nativeQuery = true)
    List<String> findNameTeam();

}
