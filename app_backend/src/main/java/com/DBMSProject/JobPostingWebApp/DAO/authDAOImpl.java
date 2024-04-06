package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//private String username;
//private String password;
//private String full_name;
//private String email;
//private String user_role;
//private boolean enabled;
//private String phone;
//private String gender

@Component
public class authDAOImpl implements authDAO {

    @Override
    public users getUser(String username) {

        return null;
    }
}
