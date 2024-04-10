package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;

public interface ApplicationDAO {
    public String saveApplication(postJobApplication postJobApplicationObj);
    postJobApplication getApplication(int ApplicationID);
}
