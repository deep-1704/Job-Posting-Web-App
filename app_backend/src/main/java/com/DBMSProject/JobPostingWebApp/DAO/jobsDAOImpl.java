package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.postJobsRequest;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

        Date jobDate = requestObj.getJob_date_posted();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String job_post_date = sdf.format(jobDate);

        Date deadLineDate = requestObj.getJob_deadline();
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
        String job_deadline = sdf1.format(deadLineDate);

//        System.out.println("JOB POST DATE : *******  "+job_post_date);
//        System.out.println("JOB DEADLINE : *******   "+job_deadline);

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
        postJobsRequest JobsRequestObj = null;

        String job_title = null;
        String job_description = null;
        String job_poster = null;
        int job_vacancy = 0;
        String[] job_location;
        String[] job_skills;
        int job_salary = 0;
        String job_type = null;
        String job_date_posted = null;
        String job_deadline = null;
        String[] company = null;

        try {
            String url = "jdbc:oracle:thin:@localhost:1521:orcl";
            String user = "c##jobpostingwebapp";
            String password = "jobpostingwebapp";

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");

            String query1 = "select job_title, job_description, job_poster, job_type, job_salary,"+
                    "job_post_date, job_deadline, job_vacancy, relevant_company_link from jobs where job_id = ?";

            PreparedStatement pstmt1 = con.prepareStatement(query1);
            pstmt1.setInt(1, job_id);
            ResultSet rs = pstmt1.executeQuery();
            if(rs.next()){
                job_title = rs.getString(1);
                job_description = rs.getString(2);
                job_poster = rs.getString(3);
                job_type = rs.getString(4);
                job_salary = rs.getInt(5);
                job_date_posted = rs.getString(6);
                job_deadline = rs.getString(7);
                job_vacancy = rs.getInt(8);
                company = new String[2];
                company[1] = rs.getString(9);
            }

            String query2 = "select company_name from job_posters where username = ?";
            PreparedStatement pstmt2 = con.prepareStatement(query2);
            pstmt2.setString(1, job_poster);
            ResultSet rs2 = pstmt2.executeQuery();
            if(rs2.next()){
                company[0] = rs2.getString(1);
            }

            String query3 = "select Location from JOB_LOCATIONS where JOB_ID = ?";
            PreparedStatement pstmt3 = con.prepareStatement(query3);
            pstmt3.setInt(1,job_id);
            ResultSet rs3 = pstmt3.executeQuery();

            List<String> locations_list = new ArrayList<>();

            while(rs3.next()){
                locations_list.add(rs3.getString("Location"));
            }

            job_location = new String[locations_list.size()];

            for(int i=0;i<locations_list.size();i++){
                job_location[i] = locations_list.get(i);
            }

            String query4 = "select SKILL from JOB_SKILLS where JOB_ID = ?";
            PreparedStatement pstmt4 = con.prepareStatement(query4);
            pstmt4.setInt(1,job_id);
            ResultSet rs4 = pstmt4.executeQuery();

            List<String> skill_list = new ArrayList<>();

            while(rs4.next()){
                skill_list.add(rs4.getString(1));
            }

            job_skills = new String[skill_list.size()];

            for(int i=0;i<skill_list.size();i++){
                job_skills[i] = skill_list.get(i);
            }


            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            JobsRequestObj =  new postJobsRequest(job_id, job_title, job_description, job_poster, job_vacancy, job_location,
                    job_skills, job_salary, job_type, sdf.parse(job_date_posted), sdf.parse(job_deadline), company);
            con.close();
            return JobsRequestObj;

        }catch (Exception e){
            e.printStackTrace();
        }

        return JobsRequestObj;

    }

    @Override
    public void deleteJob(int job_id) {

        try{
            String url = "jdbc:oracle:thin:@localhost:1521:orcl";
            String user = "c##jobpostingwebapp";
            String password = "jobpostingwebapp";

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "delete from jobs where job_id = ?";
            PreparedStatement pstmt1 = con.prepareStatement(query1);
            pstmt1.setInt(1, job_id);
            pstmt1.executeUpdate();
            con.close();

        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
