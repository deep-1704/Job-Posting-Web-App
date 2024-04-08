package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobSeekerResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobSeekerProfileRequest;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@Component
public class JobSeekerDAOImpl implements JobSeekerDAO{

    @Override
    public void updateJobSeekerProfile(updateJobSeekerProfileRequest updateJobSeekerProfileRequest, String username) {
        String full_name = updateJobSeekerProfileRequest.getFull_name();
        String email = updateJobSeekerProfileRequest.getEmail();
        String phone = updateJobSeekerProfileRequest.getPhone();
        String gender = updateJobSeekerProfileRequest.getGender();
        String brief_description = updateJobSeekerProfileRequest.getBrief_description();
        String[] skills = updateJobSeekerProfileRequest.getSkills();
        String resume_link = updateJobSeekerProfileRequest.getResume_link();
        String user_role = updateJobSeekerProfileRequest.getUser_role();
        String job_type_preference = updateJobSeekerProfileRequest.getJob_type_preference();
        String expected_salary = updateJobSeekerProfileRequest.getExpected_salary();
        String year_of_graduation = updateJobSeekerProfileRequest.getYear_of_graduation();
        String degree = updateJobSeekerProfileRequest.getDegree();
        String major = updateJobSeekerProfileRequest.getMajor();

        try {
            String url = "jdbc:oracle:thin:@localhost:1521:orcl";
            String user = "c##jobpostingwebapp";
            String password = "jobpostingwebapp";

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "update job_seekers set brief_description = ?, resume_link = ?, " +
                    "job_type_preference = ?, expected_salary = ?, year_of_graduation = ?, degree = ?," +
                    " major = ? where username = ?";

            PreparedStatement pstmt1 = con.prepareStatement(query1);
            pstmt1.setString(1, brief_description);
            pstmt1.setString(2, resume_link);
            pstmt1.setString(3, job_type_preference);
            pstmt1.setString(4, expected_salary);
            pstmt1.setString(5, year_of_graduation);
            pstmt1.setString(6, degree);
            pstmt1.setString(7, major);
            pstmt1.setString(8, username);

            pstmt1.executeUpdate();

            String query2 = "update users set full_name = ?, email = ?, phone = ?, gender = ? where username = ?";

            PreparedStatement pstmt2 = con.prepareStatement(query2);
            pstmt2.setString(1, full_name);
            pstmt2.setString(2, email);
            pstmt2.setString(3, phone);
            pstmt2.setString(4, gender);
            pstmt2.setString(5, username);

            pstmt2.executeUpdate();


            String query3 = "insert into user_skills(username, skill) values(?,?)";

            for(int i=0;i<skills.length;i++){
                PreparedStatement pstmt3 = con.prepareStatement(query3);
                pstmt3.setString(1, username);
                pstmt3.setString(2, skills[i]);
                pstmt3.executeUpdate();
            }

            con.close();

        }catch (Exception e){
            e.printStackTrace();
        }

    }

    @Override
    public getJobSeekerResponse getJobSeekerProfile(String username) {
        return null;
    }
}
