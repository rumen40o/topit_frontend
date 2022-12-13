package com.example.TopIt.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@AllArgsConstructor
@Getter
@Setter
public class Employee {

    @Id
    @S
    private Long id;
    private String name;
    private String place;
    private String email;
    private Team team;
    private Task task;

}
