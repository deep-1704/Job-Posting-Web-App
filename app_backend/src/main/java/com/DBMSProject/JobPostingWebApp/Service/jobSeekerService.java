package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;

import java.util.List;

public interface jobSeekerService {
    public String updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobPosterProfileRequest, loginUserRequest loginUserRequestObj);
    public getJobSeekerResponse getJobSeekerProfile(String username);
    public List<getJobSeekerJobsResponse> getJobSeekerJobs(String username);
}
