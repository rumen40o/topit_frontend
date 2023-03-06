package com.example.TopIt.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Random;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Employees {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)

    private Long id;

    private String name;

    private String email;

    private String jobTitle;

    private String phone;

    private String imageURL;

@Column(nullable = false,updatable = false)
    private String employeeCode;


    @ManyToOne
    @JoinColumn(name = "tasks_id")
    private Tasks tasks;


    @ManyToOne
    @JoinColumn(name = "event_id")
    private Events event;

    @ManyToOne
    @JoinColumn(name = "teams_id")
    private Teams teams;
}
