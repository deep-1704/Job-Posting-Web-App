package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.JobPosterDAO;
import com.DBMSProject.JobPostingWebApp.DAO.JobSeekerDAO;
import com.DBMSProject.JobPostingWebApp.DAO.userDAO;
import com.DBMSProject.JobPostingWebApp.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements userService {

    @Autowired
    public userServiceImpl(userDAO userDAO, JobSeekerDAO jobSeekerDAO, JobPosterDAO JobPosterDAO) {
        this.userDAO = userDAO;
        this.jobSeekerDAO = jobSeekerDAO;
        this.JobPosterDAO = JobPosterDAO;
    }

    private userDAO userDAO;
    private JobSeekerDAO jobSeekerDAO;
    private JobPosterDAO JobPosterDAO;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    private jwtUtils jwtUtils = new jwtUtils();


    public loginUserResponse loginUser(String username, String password, String user_role) {
        users tempUser = userDAO.getUser(username);
        if (tempUser == null) {
            return null;
        }
        if (bCryptPasswordEncoder.matches(password, tempUser.getPassword())) {
            user_role= tempUser.getUser_role();
            return new loginUserResponse("Bearer "+jwtUtils.generateToken(username,password,user_role));
        }

        return new loginUserResponse(null);
    }

    public loginUserResponse registerUser(String username, String password, String full_name, String email, String user_role,boolean enabled ,String phone, String gender) {
        users tempUser = userDAO.getUser(username);
        if (tempUser != null) {
            return null;
        }
        tempUser = new users(username, bCryptPasswordEncoder.encode(password), full_name, email, user_role, true, phone, gender);
        tempUser = userDAO.saveUser(tempUser);
        if (tempUser != null) {
            return new loginUserResponse("Bearer "+jwtUtils.generateToken(username, password,user_role));
        }
        return null;

    }

    @Override
    public getJobPosterResponse getJobPoster(String username) {
        users tempUser = userDAO.getUser(username);
        if (tempUser == null) {
            return null;
        }
        if (tempUser.getUser_role().equals("job_poster")) {
            getJobPosterResponse getJobPosterResponseObj = JobPosterDAO.getJobPosterProfile(username);
            if (getJobPosterResponseObj == null) {
                return null;
            }
        return new getJobPosterResponse(tempUser.getUsername(), tempUser.getFull_name(), tempUser.getEmail(), tempUser.getUser_role(), tempUser.getPhone(), tempUser.getGender(), getJobPosterResponseObj.getCompany_name(), getJobPosterResponseObj.getPosition(), getJobPosterResponseObj.getLinkedIn_url());

        }
        return null;
    }

    @Override
    public getJobSeekerResponse getJobSeeker(String username) {
        users tempUser = userDAO.getUser(username);
        if (tempUser == null) {
            return null;
        }
        if (tempUser.getUser_role().equals("job_seeker")) {
            getJobSeekerResponse getJobSeekerResponseObj = jobSeekerDAO.getJobSeekerProfile(username);
            if (getJobSeekerResponseObj == null) {
                return null;
            }
            return new getJobSeekerResponse(
                    tempUser.getUsername(),
                    tempUser.getFull_name(),
                    tempUser.getEmail(),
                    tempUser.getPhone(),
                    tempUser.getGender(),
                    getJobSeekerResponseObj.getBrief_description(),
                    getJobSeekerResponseObj.getSkills(),
                    getJobSeekerResponseObj.getResume_link(),
                    tempUser.getUser_role(),
                    getJobSeekerResponseObj.getJob_type_preference(),
                    getJobSeekerResponseObj.getExpected_salary(),
                    getJobSeekerResponseObj.getYear_of_graduation(),
                    getJobSeekerResponseObj.getDegree(),
                    getJobSeekerResponseObj.getMajor()
            );
        }
        return null;
    }

}
