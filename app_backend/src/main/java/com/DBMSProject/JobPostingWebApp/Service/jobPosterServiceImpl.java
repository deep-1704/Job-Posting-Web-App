package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.JobPosterDAO;
import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class jobPosterServiceImpl implements jobPosterService{

    @Autowired
    public jobPosterServiceImpl(JobPosterDAO jobPosterDAO){
        this.jobPosterDAO=jobPosterDAO;
    }
    private JobPosterDAO jobPosterDAO;

    @Override
    public String updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequestObj, loginUserRequest loginUserRequestObj) {
        if(loginUserRequestObj.getUser_role().equals("job_poster")) {
            jobPosterDAO.updateJobPosterProfile(updateJobPosterProfileRequestObj, loginUserRequestObj.getUsername());
            return "success";
        }
        return "null";
    }
}
