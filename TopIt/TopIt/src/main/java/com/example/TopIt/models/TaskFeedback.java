package com.example.TopIt.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class TaskFeedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;

    private String content;


    @ManyToOne(
            fetch = FetchType.EAGER
        )
    @JoinColumn(
            name = "task_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "task_id")
    )
    private Tasks task;

}