package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;

public interface JobSeekerDAO {

    void updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobSeekerProfileRequest, String username);

}
