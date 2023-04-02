package com.example.TopIt.controllers;

import com.example.TopIt.models.*;
import com.example.TopIt.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins =  "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequest request) {
        return authenticationService.register(request);
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthenticationRequest request){
        return authenticationService.login(request);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<User> findUserByEmail(@PathVariable("email") String email) {
        User user = authenticationService.findUserByEmail(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
