package com.example.TopIt.services;

import com.example.TopIt.models.TaskFeedback;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.User;
import com.example.TopIt.repository.FeedBackRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedBackService {
    private final FeedBackRepository repository;

    public FeedBackService(FeedBackRepository repository) {
        this.repository = repository;
    }
    public TaskFeedback addFeedBack(TaskFeedback feedback){
        return repository.save(feedback);
    }
    public List<TaskFeedback> findAllFeedbacks(){
        return repository.findAll();
    }

    public List<TaskFeedback> findTask(Long taskId){
        return repository.findTaskFeedbacksById(taskId);
    }
    public void deleteFeedback(Long id){
        repository.deleteById(id);
    }
}
