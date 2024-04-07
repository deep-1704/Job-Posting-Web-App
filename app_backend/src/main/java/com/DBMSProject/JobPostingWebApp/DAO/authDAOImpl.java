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
        try {
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
                if (enabled.equals("T")) {
                    enabledBool = true;
                }

                users user = new users(userName, passWord, fullName, email, userRole, enabledBool, phone, gender);
                return user;
            }

            con.close();
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public users saveUser(users User) {
        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");

            String query =
                    "insert into users(username, password, FULL_NAME, EMAIL, USER_ROLE, ENABLED, PHONE, GENDER) " +
                            "values(?, ?, ?, ?, ?, ?, ?, ?)";

            Boolean isEnabled = User.isEnabled();
            String enabled = "F";
            if (isEnabled) {
                enabled = "T";
            }

            PreparedStatement pstmt = con.prepareStatement(query);
            pstmt.setString(1, User.getUsername());
            pstmt.setString(2, User.getPassword());
            pstmt.setString(3, User.getFull_name());
            pstmt.setString(4, User.getEmail());
            pstmt.setString(5, User.getUser_role());
            pstmt.setString(6, enabled);
            pstmt.setString(7, User.getPhone());
            pstmt.setString(8, User.getGender());

            pstmt.executeUpdate();

            return User;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }

    //         Testing the saveUser method
//    public static void main(String[] args) {
//        authDAOImpl authDAO = new authDAOImpl();
//        users user = authDAO.saveUser(new users("test", "test", "test",
//                "test@gmail.com", "job_seeker",
//                true, "7998473248", "Male"));
//
//        System.out.println(user);
//
//    }

}
