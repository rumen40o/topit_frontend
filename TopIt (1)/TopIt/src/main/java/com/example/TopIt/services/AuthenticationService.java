//package com.example.TopIt.services;
//
//import com.example.TopIt.models.AuthenticationRequest;
//import com.example.TopIt.models.AuthenticationResponse;
//import com.example.TopIt.models.RegisterRequest;
//import com.example.TopIt.models.User;
//import com.example.TopIt.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.dao.DataIntegrityViolationException;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class AuthenticationService {
//
//    private final UserRepository repository;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtService jwtService;
//    private final AuthenticationManager manager;
//
//    public ResponseEntity register(RegisterRequest request) {
//        try {
//            System.out.println("IN REGISTER AUTHENTICATION SERVICE");
//
//            repository.save(request.getFirstName(), request.getLastName(), request.getEmail(), request.getPassword());
//
//            return ResponseEntity.ok(null);
//        } catch (DataIntegrityViolationException exp) {
//            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    public AuthenticationResponse login(AuthenticationRequest request) {
//        manager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getEmail(),
//                        request.getPassword()
//                )
//        );
//
//        var user = repository.findByEmail(request.getEmail()).orElseThrow();
//
//        var jwtToken = jwtService.generateToken(user);
//
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .build();
//    }
//}
