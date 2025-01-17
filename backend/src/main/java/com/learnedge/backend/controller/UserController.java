package com.learnedge.backend.controller;

import com.learnedge.backend.entity.User;
import com.learnedge.backend.request.LoginRequest;
import com.learnedge.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/user")
public class UserController {
    @Autowired   //Dependancy Injection
    private UserService userService;
    
    @PostMapping("/adduser")  //To add a user to the database table
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @GetMapping("/getusers")
    public List <User> fetchUsersList(){
        return userService.fetchUsersList();
    }
    @GetMapping("/{id}")
    public User fetchUserById(@PathVariable("id") Long userId ){
        return userService.fetchUserById(userId);
    }

    @GetMapping("/email/{email}")
    public User fetchUserByEmail(@PathVariable("email") String email ){
        return userService.fetchUserByEmail(email);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String userEmail = loginRequest.getUserEmail();
        String password = loginRequest.getPassword();

        if (userService.authenticateUser(userEmail, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }



        }
