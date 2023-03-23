package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.*;
import com.example.TopIt.repository.UserRepository;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final JwtService jwtService;

    public ResponseEntity register(RegisterRequest request) {
        try {
            repository.save(new User(request.getFirst_name(), request.getLast_name(), request.getEmail(), request.getPassword()));

            return ResponseEntity.ok(null);
        } catch (DataIntegrityViolationException exp) {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> login(AuthenticationRequest request) {
        User user = repository.findByEmail(request.getEmail()).orElseThrow();

        String jwtToken = jwtService.generateToken(user);

        return ResponseEntity.ok(new Gson().toJson(jwtToken));
    }

    public User findUserById(Long id){
        return repository.findUserById(id)
                .orElseThrow(() -> new UserNotFoundExeption("Event by id "+ id+" was not found"));
    }
}
