package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;

public interface jobSeekerService {
    public String updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobPosterProfileRequest, loginUserRequest loginUserRequestObj);
    public getJobSeekerResponse getJobSeekerProfile(String username);
}
