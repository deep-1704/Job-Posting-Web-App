package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPosterDAO {

   void updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequest,String username);
   getJobPosterResponse getJobPosterProfile(String username);
}
