package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.ApplicationDAO;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class applicationServiceImpl implements applicationService{

    private ApplicationDAO applicationDAO;
    @Autowired
    private applicationServiceImpl(ApplicationDAO applicationDAO){
        this.applicationDAO=applicationDAO;
    }

    public String postJobApplication(postJobApplication postJobApplicationObj){
        postJobApplication tempApplication=applicationDAO.getApplication(postJobApplicationObj.getJob_id());
        if(tempApplication!=null){
            return "already_applied";
        }
        String response=applicationDAO.saveApplication(postJobApplicationObj);
        return response;
    }

}
