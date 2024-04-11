package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;

import java.util.List;

public interface JobSeekerDAO {

    void updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobSeekerProfileRequest, String username);
    getJobSeekerResponse getJobSeekerProfile(String username);
    List<getJobSeekerJobsResponse> getJobSeekerJobs(String username);
}
