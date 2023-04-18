package com.example.TopIt.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

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

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate endDate;

    private String link;

    private String team_number;
}
