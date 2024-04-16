package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.getApplicationByJobId;
import com.DBMSProject.JobPostingWebApp.Models.getApplicationByUsernameResponse;
import com.DBMSProject.JobPostingWebApp.Models.postJobApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@Component
public class ApplicationDAOImpl implements ApplicationDAO {

    private final String user;
    private final String password;
    private final String url;

    public ApplicationDAOImpl() {
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


    public String saveApplication(postJobApplication postJobApplicationObj,String username){
        Date application_date=postJobApplicationObj.getApplication_date();
        int job_id=postJobApplicationObj.getJob_id();
        String application_status=postJobApplicationObj.getApplication_status();

        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        String application_date_string=sdf.format(application_date);

        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "insert into job_applications(application_id, job_id, username, application_date, application_status) " +
                    "values(application_id_seq.nextval, ?, ?, ?, ?)";

            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setInt(1,job_id);
            pstmt.setString(2,username);
            pstmt.setString(3,application_date_string);
            pstmt.setString(4,application_status);

            int result=pstmt.executeUpdate();
            con.close();
            if(result==0)return "fail";
            return "success";

        }
        catch (SQLException e){
            e.printStackTrace();
        }
        return "success";//if success or "fail" for fail.
    }

    @Override
    public postJobApplication getApplication(int job_id,String username) {
        postJobApplication application=null;
        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "select job_id from job_applications where job_id=? and username=?";
            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setInt(1,job_id);
            pstmt.setString(2,username);
            ResultSet rs=pstmt.executeQuery();

            if(rs.next()){
                application = new postJobApplication();
                application.setJob_id(rs.getInt("job_id"));
            }
            con.close();
            return application;

        }catch (SQLException e){
            e.printStackTrace();
        }
        return application;
    }

    @Override
    public List<getApplicationByJobId> getApplicationByJobId(int job_id) {
        List<getApplicationByJobId> applicationList=null;
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "select u.username,u.full_name,u.email,u.phone,u.gender,js.brief_description," +
                    "js.resume_link,js.job_type_preference,js.expected_salary,js.year_of_graduation,js.degree," +
                    "js.major,ja.application_date,ja.application_id " +
                    "from users u, job_seekers js, job_applications ja " +
                    "where u.username = js.username and u.username = ja.username and ja.job_id=?";
            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setInt(1,job_id);
            ResultSet rs=pstmt.executeQuery();
            applicationList=new ArrayList<>();
            while(rs.next()){
                getApplicationByJobId application=new getApplicationByJobId();
                application.setUsername(rs.getString(1));
                application.setFull_name(rs.getString(2));
                application.setEmail(rs.getString(3));
                application.setPhone(rs.getString(4));
                application.setGender(rs.getString(5));
                application.setBrief_description(rs.getString(6));
                application.setResume_link(rs.getString(7));
                application.setJob_type_preference(rs.getString(8));
                String expected_salary_string=rs.getString(9);
                application.setExpected_salary(Integer.parseInt((expected_salary_string)));
                application.setSkills(new ArrayList<>());
                application.setYear_of_graduation(rs.getString(10));
                application.setDegree(rs.getString(11));
                application.setMajor(rs.getString(12));
                String application_date_string=rs.getString(13);
                application.setApplication_date(sdf.parse(application_date_string));
                application.setApplication_id(rs.getInt(14));
                applicationList.add(application);
            }
            String query2 = "select skill from user_skills where username=?";
            for(getApplicationByJobId application:applicationList){

                PreparedStatement pstmt2=con.prepareStatement(query2);
                pstmt2.setString(1,application.getUsername());
                ResultSet rs2=pstmt2.executeQuery();
                while(rs2.next()){
                    application.getSkills().add(rs2.getString(1));
                }
            }

            con.close();
            return applicationList;

        }catch (SQLException e){
            e.printStackTrace();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return applicationList;
    }

    @Override
    public void deleteApplication(int application_id) {
        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "delete from job_applications where application_id=?";
            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setInt(1,application_id);
            pstmt.executeUpdate();
            con.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    @Override
    public List<getApplicationByUsernameResponse> getApplicationByUsername(String username) {
        List<getApplicationByUsernameResponse> applicationList=null;
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "select ja.job_id,j.job_title,j.job_type,j.job_deadline,j.relevant_company_link,jp.company_name,ja.application_status,ja.application_date,ja.application_id " +
                    "from jobs j, job_applications ja, job_posters jp " +
                    "where j.job_id = ja.job_id and j.job_poster = jp.username and ja.username = ?";
            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setString(1,username);
            ResultSet rs=pstmt.executeQuery();

            applicationList = new ArrayList<>();
            while(rs.next()){
                getApplicationByUsernameResponse application=new getApplicationByUsernameResponse();
                application.setJob_id(rs.getInt(1));
                application.setJob_title(rs.getString(2));
                application.setJob_type(rs.getString(3));
                String job_deadline_string=rs.getString(4);
                application.setJob_deadline(sdf.parse(job_deadline_string));
                application.setJob_location(new ArrayList<>());
                List<String> company=new ArrayList<>();
                company.add(rs.getString(6));
                company.add(rs.getString(5));
                application.setCompany(company);
                application.setApplication_status(rs.getString(7));
                String application_date_string=rs.getString(8);
                application.setApplication_date(sdf.parse(application_date_string));
                application.setApplication_id(rs.getInt(9));
                applicationList.add(application);
            }

            for(getApplicationByUsernameResponse application:applicationList){
                String query2 = "select location from job_locations where job_id=?";
                PreparedStatement pstmt2=con.prepareStatement(query2);
                pstmt2.setInt(1,application.getJob_id());
                ResultSet rs2=pstmt2.executeQuery();
                while(rs2.next()){
                    application.getJob_location().add(rs2.getString(1));
                }
            }

            con.close();
            return applicationList;

        }catch (SQLException e){
            e.printStackTrace();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return applicationList;
    }

    @Override
    public void updateApplicationStatus(int application_id, String application_status) {
        try{

            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("connected to db!!");
            String query1 = "update job_applications set application_status=? where application_id=?";
            PreparedStatement pstmt=con.prepareStatement(query1);
            pstmt.setString(1,application_status);
            pstmt.setInt(2,application_id);
            pstmt.executeUpdate();
            con.close();
        }catch (SQLException e){
            e.printStackTrace();
  }
}

}