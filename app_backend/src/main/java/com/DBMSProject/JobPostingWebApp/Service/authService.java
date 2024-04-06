package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;


public interface authService {
    public loginUserResponse loginUser(String username, String password);
}
