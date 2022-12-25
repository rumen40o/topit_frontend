package com.example.TopIt.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.File;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false)
    private Long id;

    private String nameTask;

    private String description;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime endDate;

    private String file;

    @ManyToOne
    @JoinColumn(name = "teams_id")
    private Teams teams;

    @Column(nullable = false,updatable = false)
    private String TaskCode;




}
