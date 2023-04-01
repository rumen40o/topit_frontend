package com.example.TopIt.controllers;

import com.example.TopIt.models.Employees;
import com.example.TopIt.models.TaskFeedback;
import com.example.TopIt.models.User;
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

    @GetMapping("/all")
    public ResponseEntity<List<TaskFeedback>> getAllFeedBacks(){
        List<TaskFeedback> feedbacks = feedBackService.findAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TaskFeedback> addFeedback(@RequestBody TaskFeedback feedback, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {

            TaskFeedback NewFeedback = feedBackService.addFeedBack(feedback);
            return new ResponseEntity<>(NewFeedback, HttpStatus.CREATED);
        }
    }


}
