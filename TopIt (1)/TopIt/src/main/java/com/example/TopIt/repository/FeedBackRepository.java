package com.example.TopIt.repository;

import com.example.TopIt.models.TaskFeedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FeedBackRepository extends JpaRepository<TaskFeedback,Long> {

    Optional<TaskFeedback> findTaskFeedbackById(Long id);

//    @Query(value = "SELECT * FROM task_feedback WHERE task_id = ?",nativeQuery = true)
//    public List<String> showTaskFeedback();

}
