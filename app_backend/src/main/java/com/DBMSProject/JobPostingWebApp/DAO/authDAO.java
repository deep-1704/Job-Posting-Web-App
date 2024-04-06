package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Repository;


public interface authDAO {
    users getUser(String username);//Find out 1 user only => users is just table name

}
