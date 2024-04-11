package com.DBMSProject.JobPostingWebApp.Models;

public class updateJobPosterProfileRequest {
    private String full_name;
    private String email;
    private String phone;
    private String company_name;
    private String position;
    private String linkedIn_url;

    public updateJobPosterProfileRequest(){

    }

    public updateJobPosterProfileRequest(String full_name, String email, String phone, String company_name, String position, String linkedIn_url) {
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.company_name = company_name;
        this.position = position;
        this.linkedIn_url = linkedIn_url;
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
        return "job_posters{" +
                "full_name='" + full_name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", company_name='" + company_name + '\'' +
                ", position='" + position + '\'' +
                ", linkedIn_url='" + linkedIn_url + '\'' +
                '}';
    }
}
