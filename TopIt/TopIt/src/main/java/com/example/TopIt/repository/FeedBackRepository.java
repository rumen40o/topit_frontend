package com.example.TopIt.repository;

import com.example.TopIt.models.TaskFeedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FeedBackRepository extends JpaRepository<TaskFeedback,Long> {

    Optional<TaskFeedback> findTaskFeedbackById(Long id);

    @Query("SELECT tf FROM TaskFeedback tf WHERE tf.task.id = :taskId")
    public List<TaskFeedback> findTaskFeedbacksById(@Param("taskId") Long taskId);

}
