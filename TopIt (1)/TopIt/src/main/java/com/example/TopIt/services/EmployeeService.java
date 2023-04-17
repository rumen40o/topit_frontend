package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.Employees;
import com.example.TopIt.models.User;
import com.example.TopIt.repository.EmployeeRepository;
import com.example.TopIt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository repository;

    public Employees addEmployee(Employees employees){
        System.out.println("First name: " + employees);

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
                    user.setPhone(employees.getPhone());
                    user.setJobTitle(employees.getJobTitle());
                    user.setImageURL(employees.getImageURL());
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


   public List<String> findAllEmails(){
        return repository.findAllEmails();
   }
}
