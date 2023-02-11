package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Employees;
import com.example.TopIt.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    @Autowired
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employees addEmployee(Employees employees){
       employees.setEmployeeCode(UUID.randomUUID().toString());
       return repository.save(employees);
    }

    public List<Employees> findAllEployees(){
        return repository.findAll();
    }

    public Employees updateEmployee(Employees employees ,Long id){
        return repository.findEmployeeById(id)
                .map(user -> {
                    user.setName(employees.getName());
                    user.setEmail(employees.getEmail());
                    user.setJobTitle(employees.getJobTitle());
                    user.setPhone(employees.getPhone());
                    user.setImageURl(employees.getImageURl());
                    return repository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundExeption("User by id "+ id+" was not found"));

    }

    public Employees findEmployeeById(Long id){
        return repository.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundExeption("User by id "+ id+" was not found"));
    }

    public void deleteEmployee(Long id){
        repository.deleteById(id);
    }
}
