package com.example.TopIt.repository;

import com.example.TopIt.models.TaskFeedback;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FeedBackRepository extends JpaRepository<TaskFeedback,Long> {

    Optional<TaskFeedback> findTaskFeedbackById(Long id);

//    @Query(value = "select email ,content from user_model join task_feedback tf on tf.id = user_model.id",nativeQuery = true)
//    public List<String> showTaskFeedback();

}
