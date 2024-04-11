package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobPosterDAO {

   void updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequest,String username);
   getJobPosterResponse getJobPosterProfile(String username);
   List<getJobPosterJobsResponse> getJobsPostedByJobPoster(String username);
}
