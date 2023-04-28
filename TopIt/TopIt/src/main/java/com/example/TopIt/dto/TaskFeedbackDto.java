package com.example.TopIt.dto;

import jakarta.annotation.sql.DataSourceDefinitions;
import lombok.Data;

@Data
public class TaskFeedbackDto {
    private Long id;
    private String content;
    private Integer task_id;
}
