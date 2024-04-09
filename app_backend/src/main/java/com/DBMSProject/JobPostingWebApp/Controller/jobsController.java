package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.DBMSProject.JobPostingWebApp.Service.jobsService;
import com.DBMSProject.JobPostingWebApp.Service.jwtUtils;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;

@RestController
@RequestMapping("/api/jobs")
public class jobsController {

    private jobsService jobsService;
    private jwtUtils jwtUtils=new jwtUtils();

    @Autowired
    public jobsController(jobsService jobsService) {
        this.jobsService = jobsService;
    }

    @PostMapping("/")
    public ResponseEntity<Void> saveJob(@RequestHeader("Authorization") String token, @RequestBody postJobsRequest requestObj) {
        if(! jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj==null){
            return ResponseEntity.status(401).body(null);
        }
        if(loginUserRequestObj.getUser_role().equals("job_seeker")){
            return ResponseEntity.status(400).body(null);
        }
        jobsService.saveJob(requestObj,loginUserRequestObj.getUsername());
        return ResponseEntity.status(201).body(null);
    }

    @GetMapping("/{job_id}")
    public ResponseEntity<postJobsRequest> getJob(@RequestHeader("Authorization") String token, @PathVariable int job_id) {
        if(! jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj==null){
            return ResponseEntity.status(401).body(null);
        }
        postJobsRequest response=jobsService.getJob(job_id);
        if(response==null){
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.status(200).body(response);
    }

}
