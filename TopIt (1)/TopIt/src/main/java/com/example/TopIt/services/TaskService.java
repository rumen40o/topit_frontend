package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }


    public Tasks addTask(Tasks task){
        return repository.save(task);
    }
    public List<Tasks> findAllTasks(){
        return repository.findAll();
    }

    public Tasks updateTask(Tasks task ,Long id){
        return repository.findTaskById(id)
                .map(user -> {
                    user.setNameTask(task.getNameTask());
                    user.setDescription(task.getDescription());
                    user.setEndDate(task.getEndDate());
                    user.setLink(task.getLink());
                    return repository.save(user);
                }).orElseThrow(() ->new UserNotFoundExeption("User by id "+ id+" was not found"));
    }

    public Tasks findTaskById(Long id){
        return repository.findTaskById(id)
                .orElseThrow(() -> new UserNotFoundExeption("Task by id "+ id+" was not found"));
    }

    public void deleteTask(Long id){
        repository.deleteById(id);
    }


}
