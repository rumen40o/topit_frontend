package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Events;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.repository.EventRepository;

import jdk.jfr.Event;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EventService {
    private final EventRepository repository;

    public EventService(EventRepository repository) {
        this.repository = repository;
    }


    public Events addEvent(Events events){

        return repository.save(events);
    }

    public List<Events> findAllEvents(){
        return repository.findAll();
    }

    public Events updateEvent(Events event, Long id){
        return repository.findEventById(id)
        .map(user -> {
            user.setName(event.getName());
            user.setDescription(event.getDescription());
            user.setStartDateEvent(event.getStartDateEvent());
            user.setEndDateEvent(event.getEndDateEvent());
            return repository.save(user);
        }).orElseThrow(() -> new UserNotFoundExeption("Event by id "+ id+" was not found"));
    }

    public Events findEventById( Long id){
        return repository.findEventById(id)
                .orElseThrow(() -> new UserNotFoundExeption("Event by id "+ id+" was not found"));
    }

    public void deleteEvent(Long id){
        repository.deleteById(id);
    }
}