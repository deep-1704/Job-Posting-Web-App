package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.DBMSProject.JobPostingWebApp.Service.jwtUtils;
import com.DBMSProject.JobPostingWebApp.Service.jobSeekerService;

@RestController
@RequestMapping("/api/user")
public class jobSeekerController {

private jobSeekerService jobSeekerService;
    @Autowired
    public jobSeekerController( jobSeekerService jobSeekerService) {
        this.jobSeekerService = jobSeekerService;
    }

    private jwtUtils jwtUtils=new jwtUtils();

    @PutMapping("/job_seeker")
    public ResponseEntity<Void> updateJobSeekerProfile(@RequestHeader("Authorization") String token, @RequestBody updateJobSeekerProfileRequest updateJobSeekerProfileRequest) {
        if(! jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj==null){
            return ResponseEntity.status(401).body(null);
        }
        String response=jobSeekerService.updateJobSeekerProfile(updateJobSeekerProfileRequest,loginUserRequestObj);
        if(response.equals("null")){
            return ResponseEntity.status(401).body(null);
        }
        return ResponseEntity.status(200).body(null);
    }


}
