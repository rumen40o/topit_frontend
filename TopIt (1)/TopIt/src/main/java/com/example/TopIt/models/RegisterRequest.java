package com.example.TopIt.models;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegisterRequest {
    private String first_name;

    private String last_name;

    private String email;

    private String password;
}
