package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class JobPosterDAOImpl implements JobPosterDAO {

//    List<users> usersList = new ArrayList<>();
//
//
//    JobPosterDAOImpl(){
//        usersList.add(new users("admin","admin","admin","admin","admin",true,"admin","admin"));
//        usersList.add(new users("user","$2a$12$4ckf47Zdg2LeCFNNYLsaN.2FMnal3v1RdZGje.XwVLaegV.tQnFBu","user","user","job_poster",true,"user","user"));
//    }

    @Override
    public void updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequestObj,String username){
//        for(users user:usersList){
//            if(user.getUsername().equals(username)){
//                user.setFull_name(updateJobPosterProfileRequest.getFull_name());
//                user.setEmail(updateJobPosterProfileRequest.getEmail());
//                user.setPhone(updateJobPosterProfileRequest.getPhone());
//                System.out.println("Updated Job Poster Profile"+user);
//            }
//        }

        String Full_name = updateJobPosterProfileRequestObj.getFull_name();
        String Email = updateJobPosterProfileRequestObj.getEmail();
        String Phone = updateJobPosterProfileRequestObj.getPhone();
        String CompanyName = updateJobPosterProfileRequestObj.getCompany_name();
        String Position = updateJobPosterProfileRequestObj.getPosition();
        String LinkedInUrl = updateJobPosterProfileRequestObj.getLinkedIn_url();

        String url = "jdbc:oracle:thin:@localhost:1521:orcl";
        String user = "c##jobpostingwebapp";
        String password = "jobpostingwebapp";

        try{
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "update job_posters set company_name = ?, position = ?, linkedin_link = ? where username = ?";
            PreparedStatement pstmt1 = con.prepareStatement(query1);

            pstmt1.setString(1, CompanyName);
            pstmt1.setString(2, Position);
            pstmt1.setString(3, LinkedInUrl);
            pstmt1.setString(4, username);

            pstmt1.executeUpdate();

            PreparedStatement pstmt2 = con.prepareStatement("update users set full_name = ?, email = ?," +
                    " phone = ? where username = ?");

            pstmt2.setString(1, Full_name);
            pstmt2.setString(2, Email);
            pstmt2.setString(3, Phone);
            pstmt2.setString(4, username);

            pstmt2.executeUpdate();

            con.close();

        }catch (Exception e){
            e.printStackTrace();
        }


    }

    @Override
    public getJobPosterResponse getJobPosterProfile(String username) {
        return null;
    }
}
