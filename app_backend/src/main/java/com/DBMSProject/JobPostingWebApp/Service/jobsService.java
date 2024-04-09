package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;

public interface jobsService {
    void saveJob(postJobsRequest requestObj, String username);
    postJobsRequest getJob(int job_id);
    void deleteJob(int job_id);
}
