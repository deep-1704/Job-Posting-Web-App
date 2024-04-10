package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;

import java.util.List;

public interface applicationService {
    String postJobApplication(postJobApplication postJobApplicationObj);
    List<getApplicationByJobId> getApplicationByJobId(int job_id);
}
