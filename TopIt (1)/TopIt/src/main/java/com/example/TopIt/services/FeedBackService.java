package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.TaskFeedback;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.repository.FeedBackRepository;
import com.example.TopIt.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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
}
