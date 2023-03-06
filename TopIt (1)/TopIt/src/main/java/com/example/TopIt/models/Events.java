package com.example.TopIt.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)

    private Long id;

    private String name;

    private String description;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDateEvent;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDateEvent;

    @Column(nullable = false,updatable = false)
    private String EventCode;
}
