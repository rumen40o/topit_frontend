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

    @ManyToOne(
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "user_id",
            nullable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "feedback_user_id")
    )
    private User user_id;

    @ManyToOne(
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "task_id",
            nullable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "feedback_task_id")
    )
    private Tasks task_id;

    @Column(
            columnDefinition = "VARCHAR(255)",
            nullable = false
    )
    private String content;

    @Column(
            columnDefinition = "DATETIME",
            nullable = false
    )
    private LocalDateTime dateTime;
}
