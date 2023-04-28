package com.example.TopIt.controllers;

import com.example.TopIt.dto.TaskFeedbackDto;
import com.example.TopIt.models.Employees;
import com.example.TopIt.models.TaskFeedback;
import com.example.TopIt.models.User;
import com.example.TopIt.repository.FeedBackRepository;
import com.example.TopIt.repository.TaskRepository;
import com.example.TopIt.services.EmployeeService;
import com.example.TopIt.services.FeedBackService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins =  "http://localhost:3000")
@RequiredArgsConstructor
public class FeedBackController {
    private final FeedBackService feedBackService;
    private final TaskRepository taskRepository;
    private final FeedBackRepository feedBackRepository;

    @GetMapping("/all")
    public ResponseEntity<List<TaskFeedback>> getAllFeedBacks(){
        List<TaskFeedback> feedbacks = feedBackService.findAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<List<TaskFeedback>> findTask(@PathVariable("id") Long taskId){
        List<TaskFeedback> tfs = feedBackService.findTask(taskId);
        return new ResponseEntity<>(tfs,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TaskFeedback> addFeedback(@RequestBody TaskFeedbackDto feedback) {
            TaskFeedback newTaskFeedback = new TaskFeedback(feedback.getId(), feedback.getContent(), taskRepository.findTaskById(feedback.getTask_id().longValue()).orElse(null));
            feedBackRepository.save(newTaskFeedback);
            return new ResponseEntity<>(newTaskFeedback, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable("id") Long id,@AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            feedBackService.deleteFeedback(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
