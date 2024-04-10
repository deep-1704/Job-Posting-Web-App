package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;

import java.util.List;

public interface jobPosterService {
    public String updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequest, loginUserRequest loginUserRequestObj);
    public getJobPosterResponse getJobPosterProfile(String username);
    public List<getJobPosterJobsResponse> getJobsPostedByJobPoster(String username);
}
