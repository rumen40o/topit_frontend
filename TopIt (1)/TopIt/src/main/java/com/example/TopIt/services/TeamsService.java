package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.Teams;
import com.example.TopIt.repository.TeamsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TeamsService {

    private final TeamsRepository repository;

    public TeamsService(TeamsRepository repository) {
        this.repository = repository;
    }


    public Teams addTeam(Teams teams){
        teams.setTeamCode(UUID.randomUUID().toString());
        return repository.save(teams);
    }

    public List<Teams> findAllTeams(){
        return repository.findAll();
    }

    public Teams updateTeam(Teams teams){
        return repository.save(teams);
    }

    public Teams findTeamsById(Long id){
        return repository.findTeamById(id)
                .orElseThrow(() -> new UserNotFoundExeption("Team by id "+ id+" was not found"));
    }

    public void deleteTeam(Long id){
        repository.deleteById(id);
    }

    public List<String> findEmployees(){
        return repository.findEmployee();
    }
}
