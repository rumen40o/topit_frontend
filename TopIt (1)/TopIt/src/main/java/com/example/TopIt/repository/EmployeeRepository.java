package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository  extends JpaRepository<Employees,Long> {

    void deleteEmployeeById(Long id);

    Optional<Employees> findEmployeeById(Long id);
}
