package com.example.TopIt.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Formula;

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

    private String phone;

    private String jobTitle;

    private String imageURL;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Teams team;

    @Column(nullable = false,updatable = false)
    private String employeeCode;
}
