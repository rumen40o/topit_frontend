package com.example.TopIt.controllers;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.User;
import com.example.TopIt.services.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Tasks>> getAllTasksAdmin(){
        List<Tasks> tasks = taskService.findAllTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Tasks> getTaskByIdAdmin(@PathVariable("id") Long id){
        Tasks tasks= taskService.findTaskById(id);
        System.out.println(tasks.getEndDate());
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Tasks> addTask(@RequestBody Tasks tasks, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            Tasks newTask = taskService.addTask(tasks);
            return new ResponseEntity<>(newTask, HttpStatus.CREATED);
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Tasks> updateTask(@RequestBody Tasks tasks, @PathVariable Long id, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            System.out.println(tasks.getEndDate());
            Tasks updateTask = taskService.updateTask(tasks, id);
            return new ResponseEntity<>(updateTask, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable("id") Long id,@AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            taskService.deleteTask(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
