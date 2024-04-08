package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.JobSeekerDAO;
import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class jobSeekerServiceImpl implements jobSeekerService{

    @Autowired
    public jobSeekerServiceImpl(JobSeekerDAO jobSeekerDAO){
        this.jobSeekerDAO=jobSeekerDAO;
    }
    private JobSeekerDAO jobSeekerDAO;

    @Override
    public String updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobPosterProfileRequest, loginUserRequest loginUserRequestObj) {
        if(loginUserRequestObj.getUser_role().equals("job_seeker")) {
            jobSeekerDAO.updateJobSeekerProfile(updateJobPosterProfileRequest, loginUserRequestObj.getUsername());
            return "success";
        }
        return "null";
    }

    @Override
    public getJobSeekerResponse getJobSeekerProfile(String username) {
        return jobSeekerDAO.getJobSeekerProfile(username);
    }
}
