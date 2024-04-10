package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.DAO.ApplicationDAO;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import com.DBMSProject.JobPostingWebApp.Service.applicationService;
import com.DBMSProject.JobPostingWebApp.Service.jwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/application")
public class applicationController {

    private jwtUtils jwtUtils=new jwtUtils();
    private applicationService applicationServiceObj;
    @Autowired
    applicationController(applicationService applicationServiceObj){
        this.applicationServiceObj=applicationServiceObj;
    }

    @PostMapping("/")
    public ResponseEntity<Void> postJobApplication(@RequestHeader("Authorization") String token, @RequestBody postJobApplication postJobApplicationObj){
        if(!jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj ==null){
            return ResponseEntity.status(401).body(null);
        }
        if(!loginUserRequestObj.getUser_role().equals("job_seeker")){
            return ResponseEntity.status(401).body(null);
        }
        String response= applicationServiceObj.postJobApplication(postJobApplicationObj);
        if(response.equals("already_applied")){
            return ResponseEntity.status(400).body(null);
        }
        else if(response.equals("success")){
            return ResponseEntity.status(201).body(null);
        }
        else return ResponseEntity.status(401).body(null);

    }
}
