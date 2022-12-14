package com.example.TopIt.controllers;


import com.example.TopIt.models.Employees;
import com.example.TopIt.services.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @RequestMapping("/admin")
    public void adminFunctions(Long id, Employees employees){
        getEmployeesById(id);
        getAllEmployees();
        addEmployee(employees);
        updateEmployee(employees);
        deleteEmployee(id);
    }
    @RequestMapping("/user")
    public void userFunctions(Long id){
        getAllEmployees();
        getEmployeesById(id);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Employees>> getAllEmployees(){
        List<Employees> employees = employeeService.findAllEployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employees> getEmployeesById(@PathVariable("id") Long id){
        Employees employees = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Employees> addEmployee(@RequestBody Employees employees) {
        Employees newEmployee = employeeService.addEmployee(employees);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employees> updateEmployee(@RequestBody Employees employee) {
        Employees updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
