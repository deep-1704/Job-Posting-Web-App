package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getJobPosterJobsResponse;
import com.DBMSProject.JobPostingWebApp.Models.getJobPosterResponse;
import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
public class JobPosterDAOImpl implements JobPosterDAO {

    private final String user;
    private final String password;
    private final String url;

    public JobPosterDAOImpl() {
        try {
            Resource resource = new ClassPathResource("/application.properties");
            Properties properties = PropertiesLoaderUtils.loadProperties(resource);

            user = properties.getProperty("DB_USERNAME");
            password = properties.getProperty("DB_PASSWORD");
            url = properties.getProperty("DB_URL");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

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
        List<getJobPosterJobsResponse> jobPosterJobsResponseList = new ArrayList<>();

        Map<Integer, Integer> job_id_position = new HashMap<>();

        try {

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");

            String query4 = "select COMPANY_NAME from JOB_POSTERS where username = ?";
            PreparedStatement pstmt4 = con.prepareStatement(query4);

            pstmt4.setString(1, username);
            ResultSet rs4 = pstmt4.executeQuery();

            String company_name = null;
            while(rs4.next()) {
                company_name = rs4.getString(1);
            }

            int job_id = 0;
            String job_title = null;
            String job_description = null;
            int job_vacancy = 0;
            String job_type = null;
            int job_salary = 0;
            String  job_post_date = null;
            String job_deadline = null;
            String relevant_company_link = null;

            String query1 = "select job_id, job_title, job_description, JOB_VACANCY, job_type, job_salary, job_post_date, " +
                    "job_deadline, RELEVANT_COMPANY_LINK from jobs where job_poster = ?";

            PreparedStatement pstmt1 = con.prepareStatement(query1);
            pstmt1.setString(1, username);

            ResultSet rs1 = pstmt1.executeQuery();

            int i=0;
            while(rs1.next()){

                List<String> company_List = new ArrayList<>();

                job_id = rs1.getInt(1);
                job_title = rs1.getString(2);
                job_description = rs1.getString(3);
                job_vacancy = rs1.getInt(4);
                job_type = rs1.getString(5);
                job_salary = rs1.getInt(6);
                job_post_date = rs1.getString(7);
                job_deadline = rs1.getString(8);
                relevant_company_link = rs1.getString(9);

                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

                getJobPosterJobsResponse jobPosterJobsResponseObj = new getJobPosterJobsResponse();
                jobPosterJobsResponseObj.setJob_id(job_id);
                jobPosterJobsResponseObj.setJob_title(job_title);
                jobPosterJobsResponseObj.setJob_description(job_description);
                jobPosterJobsResponseObj.setJob_vacancy(job_vacancy);
                jobPosterJobsResponseObj.setJob_type(job_type);
                jobPosterJobsResponseObj.setJob_salary(job_salary);
                jobPosterJobsResponseObj.setJob_date_posted(sdf.parse(job_post_date));
                jobPosterJobsResponseObj.setJob_deadline(sdf.parse(job_deadline));
                jobPosterJobsResponseObj.setJob_poster(username);

                company_List.add(company_name);
                company_List.add(relevant_company_link);
                jobPosterJobsResponseObj.setCompany(company_List);

                jobPosterJobsResponseList.add(jobPosterJobsResponseObj);

                job_id_position.put(job_id, i);
                i++;
            }



            String query2 = "select LOCATION from JOB_LOCATIONS where JOB_ID = ?";

            PreparedStatement pstmt2 = con.prepareStatement(query2);

            for(getJobPosterJobsResponse jobPosterJobsResponseObj_: jobPosterJobsResponseList){

                List<String> location_list = new ArrayList<>();

                pstmt2.setInt(1, jobPosterJobsResponseObj_.getJob_id());
                ResultSet rs2 = pstmt2.executeQuery();

                while(rs2.next()){
                    location_list.add(rs2.getString(1));
                }
                jobPosterJobsResponseList.get(job_id_position.get(jobPosterJobsResponseObj_.getJob_id()))
                        .setJob_location(location_list);

            }



            String query3 = "select skill from job_skills where job_id = ?";
            PreparedStatement pstmt3 = con.prepareStatement(query3);

            for(getJobPosterJobsResponse jobPosterJobsResponseObj_: jobPosterJobsResponseList) {
                pstmt3.setInt(1, jobPosterJobsResponseObj_.getJob_id());
                ResultSet rs3 = pstmt3.executeQuery();

                List<String> skill_list = new ArrayList<>();

                while(rs3.next()){
                    skill_list.add(rs3.getString(1));
                }
                jobPosterJobsResponseList.get(job_id_position.get(jobPosterJobsResponseObj_.getJob_id()))
                        .setJob_skills(skill_list);
            }


            String query5 = "select count(*) from job_applications where job_id = ?";
            PreparedStatement pstmt5 = con.prepareStatement(query5);

            for(getJobPosterJobsResponse jobPosterJobsResponseObj_: jobPosterJobsResponseList) {
                pstmt5.setInt(1, jobPosterJobsResponseObj_.getJob_id());
                ResultSet rs5 = pstmt5.executeQuery();

                while (rs5.next()) {
                    jobPosterJobsResponseList.get(job_id_position.get(jobPosterJobsResponseObj_.getJob_id()))
                            .setTotal_applications(rs5.getInt(1));
                }
            }

            con.close();

            return jobPosterJobsResponseList;

        }catch(Exception e) {
            e.printStackTrace();
        }

        return jobPosterJobsResponseList;
    }
}
