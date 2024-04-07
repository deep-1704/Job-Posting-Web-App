package com.DBMSProject.JobPostingWebApp.DAO;

import com.DBMSProject.JobPostingWebApp.Models.updateJobPosterProfileRequest;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.stereotype.Component;

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
    public void updateJobPosterProfile(updateJobPosterProfileRequest updateJobPosterProfileRequest,String username){
//        for(users user:usersList){
//            if(user.getUsername().equals(username)){
//                user.setFull_name(updateJobPosterProfileRequest.getFull_name());
//                user.setEmail(updateJobPosterProfileRequest.getEmail());
//                user.setPhone(updateJobPosterProfileRequest.getPhone());
//                System.out.println("Updated Job Poster Profile"+user);
//            }
//        }
    }
}
