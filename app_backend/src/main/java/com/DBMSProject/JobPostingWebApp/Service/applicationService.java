package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.getApplicationByUsernameResponse;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;

import java.util.List;

public interface applicationService {
    String postJobApplication(postJobApplication postJobApplicationObj,String username);
    List<getApplicationByJobId> getApplicationByJobId(int job_id);
    void deleteApplication(int application_id);
    List<getApplicationByUsernameResponse> getApplicationByUsername(String username);
    void updateApplicationStatus(int application_id, String application_status);
}
