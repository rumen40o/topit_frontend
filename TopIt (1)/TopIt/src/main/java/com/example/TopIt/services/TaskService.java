package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }


    public Tasks addTask(Tasks task){
        task.setTaskCode(UUID.randomUUID().toString());
        return repository.save(task);
    }
    public Tasks addFileTask(Tasks tasks){
        return repository.save(tasks);
    }

    public List<Tasks> findAllTasks(){
        return repository.findAll();
    }

    public Tasks updateTask(Tasks task){
        return repository.save(task);
    }

    public Tasks findTaskById(Long id){
        return repository.findTaskById(id)
                .orElseThrow(() -> new UserNotFoundExeption("Task by id "+ id+" was not found"));
    }

    public void deleteTask(Long id){
        repository.deleteById(id);
    }
}
