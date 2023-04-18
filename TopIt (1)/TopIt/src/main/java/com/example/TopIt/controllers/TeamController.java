package com.example.TopIt.controllers;

import com.example.TopIt.models.Tasks;
import com.example.TopIt.models.Teams;
import com.example.TopIt.models.User;
import com.example.TopIt.services.TeamsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<Teams> addTeam(@RequestBody Teams teams, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
        return new ResponseEntity<>(null, HttpStatus.valueOf(403));
    }else {

        Teams newTeam = teamsService.addTeam(teams);
        return new ResponseEntity<>(newTeam, HttpStatus.CREATED);
    }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Teams> updateTeam(@RequestBody Teams teams, @AuthenticationPrincipal User u, @PathVariable Long id) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            Teams updateTeam = teamsService.updateTeam(teams,id);
            return new ResponseEntity<>(updateTeam, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTeam(@PathVariable("id") Long id, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        } else {

            teamsService.deleteTeam(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
