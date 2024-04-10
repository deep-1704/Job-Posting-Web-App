package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Service.jobPosterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.DBMSProject.JobPostingWebApp.Service.jwtUtils;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class jobPosterController {
    private jobPosterService jobPosterService;
    @Autowired
    public jobPosterController( jobPosterService jobPosterService) {
        this.jobPosterService = jobPosterService;
    }

    private jwtUtils jwtUtils=new jwtUtils();

    @PutMapping("/job_poster")
    public ResponseEntity<Void> updateJobPosterProfile(@RequestHeader("Authorization") String token, @RequestBody updateJobPosterProfileRequest updateJobPosterProfileRequest) {
        if(! jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj==null){
            return ResponseEntity.status(401).body(null);
        }
        String response=jobPosterService.updateJobPosterProfile(updateJobPosterProfileRequest,loginUserRequestObj);
        if(response.equals("null")){
            return ResponseEntity.status(401).body(null);
        }
        return ResponseEntity.status(200).body(null);
    }

    @GetMapping("/job_poster/jobs")
    public ResponseEntity<List<getJobPosterJobsResponse>> getJobsPostedByJobPoster(@RequestHeader("Authorization") String token) {
        if(! jwtUtils.validateJwtToken(token.split(" ")[1])){
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj=jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if(loginUserRequestObj==null){
            return ResponseEntity.status(401).body(null);
        }
        if(!loginUserRequestObj.getUser_role().equals("job_poster")){
            return ResponseEntity.status(400).body(null);
        }
        List<getJobPosterJobsResponse> response=jobPosterService.getJobsPostedByJobPoster(loginUserRequestObj.getUsername());
        if(response.size()==0){ //No jobs posted by job poster
            return ResponseEntity.status(401).body(null);
        }
        return ResponseEntity.status(200).body(response);
    }
}
