package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.users;

public interface userDAO {
    users getUser(String username);//Find out 1 user only => users is just table name

    users saveUser(users user);//Save user to database

}
