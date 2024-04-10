package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
        getJobPosterResponse JobPosterResponseObj = null;

        try{
            String url = "jdbc:oracle:thin:@localhost:1521:orcl";
            String user = "c##jobpostingwebapp";
            String password = "jobpostingwebapp";

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");

            String query1 = "select company_name, position, linkedin_link from job_posters where username = ?";

            PreparedStatement pstmt1 = con.prepareStatement(query1);

            pstmt1.setString(1, username);
            ResultSet rs1 = pstmt1.executeQuery();

            int rs1_size = 0;
            String company_name = null;
            String position = null;
            String linkedIn_url = null;

            while(rs1.next()) {
                rs1_size++;
                if(rs1_size > 1) {
                    System.out.println("Error: More than one row in job_posters exists with same username");
                    return null;
                }
                company_name = rs1.getString(1);
                position = rs1.getString(2);
                linkedIn_url = rs1.getString(3);
            }

            String query2 = "select full_name, email, phone, gender from users where username = ?";
            PreparedStatement pstmt2 = con.prepareStatement(query2);
            pstmt2.setString(1, username);

            ResultSet rs2 = pstmt2.executeQuery();

            int rs2_size = 0;

            String full_name = null;
            String email = null;
            String phone = null;
            String gender = null;

            while(rs2.next()) {
                rs2_size++;
                if(rs2_size >1) {
                    System.out.println("Error: More than one row in users exists with same username");
                    return null;
                }

                full_name = rs2.getString(1);
                email = rs2.getString(2);
                phone = rs2.getString(3);
                gender = rs2.getString(4);
            }

            String user_role = "job_poster";
            if(rs1_size == 1 || rs2_size == 1) {
                JobPosterResponseObj = new getJobPosterResponse(username, full_name, email, phone,
                        user_role, gender, company_name, position, linkedIn_url);

                con.close();

//                    System.out.println(JobPosterResponseObj);
                return JobPosterResponseObj;
            }
            else {
                System.out.println("Error: No row in users or job_posters table exists with given username");



                return JobPosterResponseObj;
            }


        }catch (Exception e){
            e.printStackTrace();
        }

        return JobPosterResponseObj;
    }

    @Override
    public List<getJobPosterJobsResponse> getJobsPostedByJobPoster(String username) {
        return List.of();
    }
}
