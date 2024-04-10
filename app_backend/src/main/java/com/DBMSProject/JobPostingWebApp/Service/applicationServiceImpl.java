package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.ApplicationDAO;
import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class applicationServiceImpl implements applicationService{

    private ApplicationDAO applicationDAO;
    @Autowired
    private applicationServiceImpl(ApplicationDAO applicationDAO){
        this.applicationDAO=applicationDAO;
    }

    @Override
    public String postJobApplication(postJobApplication postJobApplicationObj){
        postJobApplication tempApplication=applicationDAO.getApplication(postJobApplicationObj.getJob_id());
        if(tempApplication!=null){
            return "already_applied";
        }
        String response=applicationDAO.saveApplication(postJobApplicationObj);
        return response;
    }

    @Override
    public List<getApplicationByJobId> getApplicationByJobId(int job_id) {
        return applicationDAO.getApplicationByJobId(job_id);
    }


}
