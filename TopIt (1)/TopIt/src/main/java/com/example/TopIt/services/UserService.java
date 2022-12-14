package com.example.TopIt.services;

import com.example.TopIt.exception.UserNotFoundExeption;
import com.example.TopIt.models.CustonUserDetails;
import com.example.TopIt.models.UserModel;
import com.example.TopIt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UserModel user = repository.findByEmail(email);
        if(user == null){
            throw new UserNotFoundExeption("User not found");
        }
        return new CustonUserDetails(user);
    }
}
