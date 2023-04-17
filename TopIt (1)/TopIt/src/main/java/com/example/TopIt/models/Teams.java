package com.example.TopIt.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Teams {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;

    private String name;


    @ManyToOne
    @JoinColumn(name = "leader_id")
    private Employees leader;


    @ManyToOne
    @JoinColumn(name = "members_id")
    private Employees members;

    @Column(nullable = false,updatable = false)
    private String TeamCode;
}
