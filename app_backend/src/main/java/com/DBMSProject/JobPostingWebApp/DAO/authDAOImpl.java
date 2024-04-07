package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class authDAOImpl implements authDAO {

    String url = "jdbc:oracle:thin:@localhost:1521:orcl";
    String user = "c##jobpostingwebapp";
    String password = "jobpostingwebapp";

    @Override
    public users getUser(String username) {
        try{
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");

            String query =
                    "select username, password, full_name, email, user_role," +
                            "enabled, phone, gender from users where username = ?";

            PreparedStatement pstmt = con.prepareStatement(query);
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                String userName = rs.getString("username");
                String passWord = rs.getString("password");
                String fullName = rs.getString("full_name");
                String email = rs.getString("email");
                String userRole = rs.getString("user_role");
                String enabled = rs.getString("enabled");
                String phone = rs.getString("phone");
                String gender = rs.getString("gender");

                Boolean enabledBool = false;
                if(enabled.equals("T")){
                    enabledBool = true;
                }

                users user = new users(userName, passWord, fullName, email, userRole, enabledBool, phone, gender);
                return user;
            }

            con.close();
            rs.close();
        }catch(SQLException e){
            e.printStackTrace();
        }
        return null;
    }

    // Testing the getUser method
//    public static void main(String[] args){
//        authDAOImpl auth = new authDAOImpl();
//        users user = auth.getUser("Raghava");
//        System.out.println(user);
//    }

}
