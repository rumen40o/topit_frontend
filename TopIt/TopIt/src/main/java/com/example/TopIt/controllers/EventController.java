package com.example.TopIt.controllers;

import com.example.TopIt.models.Events;
import com.example.TopIt.models.User;
import com.example.TopIt.services.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Events>> getAllEventAdmin(){
        List<Events> events = eventService.findAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Events> getEventByIdAdmin(@PathVariable("id") Long id){
        Events events = eventService.findEventById(id);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Events> addEvent(@RequestBody Events events, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
        return new ResponseEntity<>(null, HttpStatus.valueOf(403));
    }else {

        Events newEvent = eventService.addEvent(events);
        return new ResponseEntity<>(newEvent, HttpStatus.CREATED);
    }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Events> updateEvent(@RequestBody Events events,@AuthenticationPrincipal User u, @PathVariable Long id){
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            Events updateEvent = eventService.updateEvent(events, id);
            return new ResponseEntity<>(updateEvent, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable("id") Long id,@AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            eventService.deleteEvent(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
