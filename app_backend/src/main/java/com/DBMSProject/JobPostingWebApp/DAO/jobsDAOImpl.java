package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;
import org.springframework.stereotype.Component;

@Component
public class jobsDAOImpl implements jobsDAO{
    @Override
    public void saveJob( postJobsRequest requestObj,String username){

    }

    @Override
    public postJobsRequest getJob(int job_id) {
        return null;
    }
}
