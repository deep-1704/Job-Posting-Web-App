package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.loginUserRequest;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;

public interface jobPosterService {
    public String updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequest, loginUserRequest loginUserRequestObj);
}
