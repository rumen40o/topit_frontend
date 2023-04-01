package com.example.TopIt.repository;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findUserById(Long id);
    @Query(value = "SELECT * FROM user_model WHERE user_model.email NOT IN (SELECT employees.email FROM employees) AND user_model.id <> :id", nativeQuery = true)
    List<User> findEmployeeSuggestionsExcept(@Param("id") Long id);

}
