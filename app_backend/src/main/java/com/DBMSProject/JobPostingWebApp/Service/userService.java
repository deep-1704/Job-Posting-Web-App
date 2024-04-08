package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;


public interface userService {
    public loginUserResponse loginUser(String username, String password, String user_role);

    public loginUserResponse registerUser(String username, String password, String fullName, String email, String userRole, boolean b, String phone, String gender);
    public getJobPosterResponse getJobPoster(String username);
    public getJobSeekerResponse getJobSeeker(String username);
}
