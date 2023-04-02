package com.example.TopIt.controllers;


import com.example.TopIt.models.Employees;
import com.example.TopIt.models.User;
import com.example.TopIt.services.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Employees>> getAllEmployeesAdmin(){
        List<Employees> employees = employeeService.findAllEployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employees> getEmployeesByIdAdmin(@PathVariable("id") Long id) {
        Employees employees = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Employees> addEmployee(@RequestBody Employees employees, @AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {

            Employees newEmployee = employeeService.addEmployee(employees);
            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Employees> updateEmployee(@RequestBody Employees employee, @PathVariable Long id,@AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            Employees updateEmployee = employeeService.updateEmployee(employee, id);
            return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id,@AuthenticationPrincipal User u) {
        if (!u.getAdministrator()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(403));
        }else {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
