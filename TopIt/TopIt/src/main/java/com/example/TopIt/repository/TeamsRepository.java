package com.example.TopIt.repository;

import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.Teams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TeamsRepository extends JpaRepository<Teams,Long> {
    Optional<Teams> findTeamById(Long id);

    @Query(value = "select name from employees",nativeQuery = true)
    public List<String> findEmployee();
}
