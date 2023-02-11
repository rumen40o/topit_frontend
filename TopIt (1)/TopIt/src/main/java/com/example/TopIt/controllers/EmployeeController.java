package com.example.TopIt.controllers;


import com.example.TopIt.models.Employees;
import com.example.TopIt.services.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    
    @GetMapping("/admin/all")
    public ResponseEntity<List<Employees>> getAllEmployeesAdmin(){
        List<Employees> employees = employeeService.findAllEployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @GetMapping("/user/all")
    public ResponseEntity<List<Employees>> getAllEmployeesUser(){
        List<Employees> employees = employeeService.findAllEployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/admin/find/{id}")
    public ResponseEntity<Employees> getEmployeesByIdAdmin(@PathVariable("id") Long id){
        Employees employees = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @GetMapping("/user/find/{id}")
    public ResponseEntity<Employees> getEmployeesByIdUser(@PathVariable("id") Long id){
        Employees employees = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @PostMapping("/admin/add")
    public ResponseEntity<Employees> addEmployee(@RequestBody Employees employees) {
        Employees newEmployee = employeeService.addEmployee(employees);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/admin/update/{id}")
    public ResponseEntity<Employees> updateEmployee(@RequestBody Employees employee, @PathVariable Long id) {
        Employees updateEmployee = employeeService.updateEmployee(employee,id);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
