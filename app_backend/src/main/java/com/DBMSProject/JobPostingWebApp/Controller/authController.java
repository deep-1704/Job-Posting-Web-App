package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.registerUserRequest;
import com.DBMSProject.JobPostingWebApp.Service.authService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class authController {

    @Autowired
    public authController(authService authService) {
        this.authService = authService;
    }

    private final authService authService;



//    loginUser
    @PostMapping("/login")
    public ResponseEntity<loginUserResponse> loginUser(@RequestBody loginUserRequest loginUserRequestObj){
        loginUserResponse loginUserResponseObj=authService.loginUser(loginUserRequestObj.getUsername(), loginUserRequestObj.getPassword(),loginUserRequestObj.getUser_role());
        if(loginUserResponseObj==null){
            return ResponseEntity.status(404).body(null);
        }
        if(loginUserResponseObj.getToken()==null){
            return ResponseEntity.status(400).body(null);
        }

        return ResponseEntity.status(200).body(loginUserResponseObj);
    }

    //   registerUser
    @PostMapping("/register")
    public ResponseEntity<loginUserResponse> registerUser(@RequestBody registerUserRequest registerUserRequestObj){
        loginUserResponse loginUserResponseObj=authService.registerUser(registerUserRequestObj.getUsername(), registerUserRequestObj.getPassword(),registerUserRequestObj.getFull_name(),registerUserRequestObj.getEmail(),registerUserRequestObj.getUser_role(),true,registerUserRequestObj.getPhone(),registerUserRequestObj.getGender());
        if(loginUserResponseObj==null){
            return ResponseEntity.status(400).body(null);
        }
        return ResponseEntity.status(201).body(loginUserResponseObj);
    }

}
