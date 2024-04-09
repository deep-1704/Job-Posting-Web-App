package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;
import com.DBMSProject.JobPostingWebApp.DAO.jobsDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class jobsServiceImpl implements jobsService{
    private jobsDAO jobsDAO;

    @Autowired
    public jobsServiceImpl(jobsDAO jobsDAO) {
        this.jobsDAO = jobsDAO;
    }


    @Override
    public void saveJob(postJobsRequest requestObj, String username) {
        jobsDAO.saveJob(requestObj, username);
    }
}
