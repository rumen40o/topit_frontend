package com.example.TopIt.models;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegisterRequest {


    private String username;

    private String email;

    private String password;
}
