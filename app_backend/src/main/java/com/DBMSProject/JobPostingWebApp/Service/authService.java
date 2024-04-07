package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;


public interface authService {
    public loginUserResponse loginUser(String username, String password, String user_role);

    public loginUserResponse registerUser(String username, String password, String fullName, String email, String userRole, boolean b, String phone, String gender);
}
