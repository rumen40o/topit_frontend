package com.example.TopIt.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @OneToOne
    @JoinColumn(name = "leader_id_id")
    private Employees leader_id;

    @ManyToOne
    @JoinColumn(name = "members_id_id")
    private Employees members_id;

    @Column(nullable = false,updatable = false)
    private String TeamCode;
}
