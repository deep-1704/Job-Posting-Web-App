package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.getApplicationByUsernameResponse;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ApplicationDAOImpl implements ApplicationDAO {
    public String saveApplication(postJobApplication postJobApplicationObj) {
        return "success";//if success or "fail" for fail.
    }

    @Override
    public postJobApplication getApplication(int ApplicationID) {
        return null;
    }

    @Override
    public List<getApplicationByJobId> getApplicationByJobId(int job_id) {
        return null;
    }

    @Override
    public void deleteApplication(int application_id) {
    }

    @Override
    public List<getApplicationByUsernameResponse> getApplicationByUsername(String username) {
        return List.of();
    }

}
