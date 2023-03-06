package com.example.TopIt.controllers;

import com.example.TopIt.models.Events;
import com.example.TopIt.services.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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


    @GetMapping("/admin/all")
    public ResponseEntity<List<Events>> getAllEventAdmin(){
        List<Events> events = eventService.findAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }
    @GetMapping("/user/all")
    public ResponseEntity<List<Events>> getAllEventUser(){
        List<Events> events = eventService.findAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/admin/find/{id}")
    public ResponseEntity<Events> getEventByIdAdmin(@PathVariable("id") Long id){
        Events events = eventService.findEventById(id);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }
    @GetMapping("/user/find/{id}")
    public ResponseEntity<Events> getEventByIdUser(@PathVariable("id") Long id){
        Events events = eventService.findEventById(id);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }
    @PostMapping("/admin/add")
    public ResponseEntity<Events> addEvent(@RequestBody Events events) {
       Events newEvent = eventService.addEvent(events);
        return new ResponseEntity<>(newEvent, HttpStatus.CREATED);
    }

    @PutMapping("/admin/update")
    public ResponseEntity<Events> updateEvent(@RequestBody Events events){
       Events updateEvent = eventService.updateEvent(events);
        return new ResponseEntity<>(updateEvent, HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable("id") Long id) {
        eventService.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
