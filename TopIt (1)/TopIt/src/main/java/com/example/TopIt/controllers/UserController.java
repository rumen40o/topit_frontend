package com.example.TopIt.controllers;


import com.example.TopIt.models.UserModel;
import com.example.TopIt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String getRegisterPage(Model model){
        model.addAttribute("registerRequest", new UserModel());
        return "register_page";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model){
        model.addAttribute("loginRequest" , new UserModel());
        return "login_page";
    }
    @PostMapping("/register")
    public String register(@ModelAttribute UserModel userModel){
        System.out.println("register request " + userModel);
        UserModel registerUser = userService.registerUser(userModel.getPassword(), userModel.getEmail(), userModel.getUsername());
        if(registerUser == null){
            return "error_page";
        }else{
            return "login_page";
        }
    }
    @PostMapping("/login")
    public String login(@ModelAttribute UserModel userModel, Model model){
        System.out.println("register request " + userModel);
        UserModel authenticated = userService.authenticate(userModel.getUsername(), userModel.getPassword());
        if(authenticated != null){
            return "personal_page";
        }else{
            return "error_page";
        }
    }


}
