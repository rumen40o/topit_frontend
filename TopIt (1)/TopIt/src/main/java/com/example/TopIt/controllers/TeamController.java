package com.example.TopIt.controllers;

import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.Teams;
import com.example.TopIt.services.TeamsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
public class TeamController {
    private final TeamsService teamsService;

    public TeamController(TeamsService teamsService) {
        this.teamsService = teamsService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Teams>> getAllTeamUser(){
        List<Teams> teams = teamsService.findAllTeams();
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Teams> getTeamsByIdAdmin(@PathVariable("id") Long id){
       Teams teams= teamsService.findTeamsById(id);
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }
    @GetMapping("/allEmployees")
    public ResponseEntity<List<String>> getAllUsersEmail(){
        List<String> emp = teamsService.findEmployees();
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Teams> addTeam(@RequestBody Teams teams) {
        Teams newTeam= teamsService.addTeam(teams);
        return new ResponseEntity<>(newTeam, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Teams> updateTeam(@RequestBody Teams teams) {
        Teams updateTeam = teamsService.updateTeam(teams);
        return new ResponseEntity<>(updateTeam, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTeam(@PathVariable("id") Long id) {
        teamsService.deleteTeam(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
