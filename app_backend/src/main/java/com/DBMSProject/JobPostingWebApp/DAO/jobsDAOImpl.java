package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;
import org.springframework.stereotype.Component;

import java.sql.*;

@Component
public class jobsDAOImpl implements jobsDAO {
    @Override
    public void saveJob(postJobsRequest requestObj, String username) {
//        System.out.println(requestObj);
//        System.out.println(username);
        String job_title = requestObj.getJob_title();
        String job_description = requestObj.getJob_description();
        String job_type = requestObj.getJob_type();
        String job_salary = String.valueOf(requestObj.getJob_salary());
        String job_post_date = requestObj.getJob_date_posted().toString();
        String job_deadline = requestObj.getJob_deadline().toString();
//        System.out.println(job_deadline+" "+job_post_date);
        int job_vacancy = requestObj.getJob_vacancy();
        String[] job_location = requestObj.getJob_location();
        String[] company_array = requestObj.getCompany();
        String[] skills_array = requestObj.getJob_skills();

        try {
            String url = "jdbc:oracle:thin:@localhost:1521:orcl";
            String user = "c##jobpostingwebapp";
            String password = "jobpostingwebapp";

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "insert into jobs(job_id, job_title, job_description, job_poster, job_type, job_salary, " +
                    "job_post_date, job_deadline, job_vacancy, relevant_company_link ) " +
                    "values(job_id_seq.nextval, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement pstmt1 = con.prepareStatement(query1);
            pstmt1.setString(1, job_title);
            pstmt1.setString(2, job_description);
            pstmt1.setString(3, username);
            pstmt1.setString(4, job_type);
            pstmt1.setString(5, job_salary);
            pstmt1.setString(6, job_post_date);
            pstmt1.setString(7, job_deadline);
            pstmt1.setInt(8, job_vacancy);
            pstmt1.setString(9, company_array[1]);

            pstmt1.executeUpdate();


//
            int rows = 0;
            String query2 = "select job_id_seq.CURRVAL from dual";
            PreparedStatement pstmt2 = con.prepareStatement(query2);
            ResultSet rs = pstmt2.executeQuery();
            if(rs.next()){
                rows = rs.getInt(1);
            }
//
            String query3 = "insert into job_locations(JOB_ID, LOCATION) values(?,?)";

            for(String location: job_location){
                PreparedStatement pstmt3 = con.prepareStatement(query3);
                pstmt3.setInt(1, rows);
                pstmt3.setString(2, location);
                pstmt3.executeUpdate();
            }
//
            String query4 = "insert into job_skills(JOB_ID, SKILL) values(?,?)";

            for(String skill: skills_array){
                PreparedStatement pstmt4 = con.prepareStatement(query4);
                pstmt4.setInt(1, rows);
                pstmt4.setString(2, skill);
                pstmt4.executeUpdate();
            }
//
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public postJobsRequest getJob(int job_id) {
        return null;
    }

    @Override
    public void deleteJob(int job_id) {

    }
}
