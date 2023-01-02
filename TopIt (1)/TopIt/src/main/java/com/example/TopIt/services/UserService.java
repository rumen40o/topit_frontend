package com.example.TopIt.services;

import com.example.TopIt.models.UserModel;
import com.example.TopIt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserModel registerUser( String password,String email,String username){
        if (username == null || password == null) {
            return null;
        } else {
            UserModel userModel = new UserModel();
            userModel.setUsername(username);
            userModel.setPassword(password);
            userModel.setEmail(email);

            return userRepository.save(userModel);
        }
    }


    public UserModel authenticate(String username, String password){
        return userRepository.findByUsernameAndPassword(username,password)
                .orElse(null);
    }

}
