package com.DBMSProject.JobPostingWebApp.Controller;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.DBMSProject.JobPostingWebApp.Service.userService;
import com.DBMSProject.JobPostingWebApp.Service.jwtUtils;

@RestController
@RequestMapping("/api/user")
public class userController {
    private userService userService;

    @Autowired
    public userController(userService userService) {
        this.userService = userService;
    }
    private jwtUtils jwtUtils = new jwtUtils();

    @GetMapping("/{username}")
    public ResponseEntity<?> getUser(@RequestHeader("Authorization") String token, @PathVariable String username) {
        if (!jwtUtils.validateJwtToken(token.split(" ")[1])) {
            return ResponseEntity.status(401).body(null);
        }
        loginUserRequest loginUserRequestObj = jwtUtils.decodeJwtToken(token.split(" ")[1]);
        if (loginUserRequestObj == null) {
            return ResponseEntity.status(401).body(null);
        }
        if (loginUserRequestObj.getUser_role().equals("job_seeker")) {
            getJobSeekerResponse response = userService.getJobSeeker(username);
            if (response == null) {
                return ResponseEntity.status(401).body(null);
            }
            return ResponseEntity.status(200).body(response);
        } else if (loginUserRequestObj.getUser_role().equals("job_poster")) {
            getJobPosterResponse response = userService.getJobPoster(username);
            if (response == null) {
                return ResponseEntity.status(401).body(null);
            }
            return ResponseEntity.status(200).body(response);
        }
        return ResponseEntity.status(401).body(null);
    }


}
