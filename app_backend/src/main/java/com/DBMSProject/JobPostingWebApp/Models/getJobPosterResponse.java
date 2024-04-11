package com.DBMSProject.JobPostingWebApp.Models;


public class getJobPosterResponse {
    private String username;
    private String full_name;
    private String email;
    private String phone;
    private String user_role;
    private String gender;
    private String company_name;
    private String position;
    private String linkedIn_url;

    public getJobPosterResponse(){

    }

    public getJobPosterResponse(String username, String full_name, String email, String phone, String user_role, String gender, String company_name, String position, String linkedIn_url) {
        this.username = username;
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.user_role = user_role;
        this.gender = gender;
        this.company_name = company_name;
        this.position = position;
        this.linkedIn_url = linkedIn_url;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getLinkedIn_url() {
        return linkedIn_url;
    }

    public void setLinkedIn_url(String linkedIn_url) {
        this.linkedIn_url = linkedIn_url;
    }

    @Override
    public String toString() {
        return "getJobPosterResponse{" +
                "username='" + username + '\'' +
                ", full_name='" + full_name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", user_role='" + user_role + '\'' +
                ", gender='" + gender + '\'' +
                ", company_name='" + company_name + '\'' +
                ", position='" + position + '\'' +
                ", linkedIn_url='" + linkedIn_url + '\'' +
                '}';
    }
}
