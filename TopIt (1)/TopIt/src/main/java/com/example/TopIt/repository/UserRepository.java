package com.example.TopIt.repository;

import com.example.TopIt.models.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    @Query(value = "INSERT INTO user_model (f_name, l_name, email, password) VALUES (:f_name, :l_name, :email, :password)", nativeQuery = true)
    @Transactional
    void save(@Param("f_name") String fName, @Param("l_name") String lName, @Param("email") String email, @Param("password") String password);
}
