package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;

import java.util.List;

public interface ApplicationDAO {
    public String saveApplication(postJobApplication postJobApplicationObj);
    postJobApplication getApplication(int ApplicationID);
    List<getApplicationByJobId> getApplicationByJobId(int job_id);
}