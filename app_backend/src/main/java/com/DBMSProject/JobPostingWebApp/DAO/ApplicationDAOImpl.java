package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import org.springframework.stereotype.Component;

@Component
public class ApplicationDAOImpl implements ApplicationDAO{
    public String saveApplication(postJobApplication postJobApplicationObj){
        return "success";//if success or "fail" for fail.
    }

    @Override
    public postJobApplication getApplication(int ApplicationID) {
        return null;
    }
}
