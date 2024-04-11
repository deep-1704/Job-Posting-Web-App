package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;

public interface jobsDAO {
    void saveJob(postJobsRequest requestObj, String username);
    postJobsRequest getJob(int job_id);
    void deleteJob(int job_id);
}
