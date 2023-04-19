package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository  extends JpaRepository<Employees,Long> {

    Optional<Employees> findEmployeeById(Long id);

    @Query(value = "select email from user_model", nativeQuery = true)
    public List<String> findAllEmails();

}
