package com.example.TopIt.repository;

import com.example.TopIt.models.TaskFeedback;
import com.example.TopIt.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FeedBackRepository extends JpaRepository<TaskFeedback,Long> {

    Optional<TaskFeedback> findTaskFeedbackById(Long id);
}
