package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EmployeeRepository  extends JpaRepository<Employees,Long> {

    Optional<Employees> findEmployeeById(Long id);
}
