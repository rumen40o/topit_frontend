//package com.example.TopIt.controllers;
//
//import com.example.TopIt.models.AuthenticationRequest;
//import com.example.TopIt.models.AuthenticationResponse;
//import com.example.TopIt.models.RegisterRequest;
//import com.example.TopIt.services.AuthenticationService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/auth")
//@CrossOrigin(origins =  "http://localhost:3000")
//@RequiredArgsConstructor
//public class AuthenticationController {
//    private final AuthenticationService authenticationService;
//
//    @PostMapping("/register")
//    public ResponseEntity register(@RequestBody RegisterRequest request) {
//        return authenticationService.register(request);
//    }
//    @GetMapping("/login")
//    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request){
//        return ResponseEntity.ok(authenticationService.login(request));
//    }
//}
