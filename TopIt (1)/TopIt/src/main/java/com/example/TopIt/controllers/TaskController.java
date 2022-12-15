package com.example.TopIt.controllers;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.services.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;


    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping("/admin")
    public void adminFunctions(Long id, Tasks tasks){
        getTaskById(id);
        getAllTasks();
        addTask(tasks);
        updateTask(tasks);
        deleteTask(id);
    }
    @RequestMapping("/user")
    public void userFunctions(Long id){
        getAllTasks();
        getTaskById(id);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Tasks>> getAllTasks(){
        List<Tasks> tasks = taskService.findAllTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Tasks> getTaskById(@PathVariable("id") Long id){
        Tasks tasks= taskService.findTaskById(id);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Tasks> addTask(@RequestBody Tasks tasks) {
        Tasks newTask = taskService.addTask(tasks);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Tasks> updateTask(@RequestBody Tasks tasks) {
        Tasks updateTask = taskService.updateTask(tasks);
        return new ResponseEntity<>(updateTask, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
