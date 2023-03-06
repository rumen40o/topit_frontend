package com.example.TopIt.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
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

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;


    private String link;

    @ManyToOne
    @JoinColumn(name = "teams_id")
    private Teams teams;

    @Column(nullable = false,updatable = false)
    private String TaskCode;
}
