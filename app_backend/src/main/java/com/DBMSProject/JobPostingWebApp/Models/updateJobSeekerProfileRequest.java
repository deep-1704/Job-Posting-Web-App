package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Arrays;

public class updateJobSeekerProfileRequest {

    private String full_name;
    private String email;
    private String phone;
    private String gender;
    private String brief_description;
    private String[] skills;
    private String resume_link;
    private String user_role;
    private String job_type_preference;
    private String expected_salary;
    private String year_of_graduation;
    private String degree;
    private String major;

    public updateJobSeekerProfileRequest(){

    }

    public updateJobSeekerProfileRequest(String full_name, String email, String phone, String gender, String brief_description, String[] skills, String resume_link, String user_role, String job_type_preference, String expected_salary, String year_of_graduation, String degree, String major) {
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.brief_description = brief_description;
        this.skills = skills;
        this.resume_link = resume_link;
        this.user_role = user_role;
        this.job_type_preference = job_type_preference;
        this.expected_salary = expected_salary;
        this.year_of_graduation = year_of_graduation;
        this.degree = degree;
        this.major = major;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBrief_description() {
        return brief_description;
    }

    public void setBrief_description(String brief_description) {
        this.brief_description = brief_description;
    }

    public String[] getSkills() {
        return skills;
    }

    public void setSkills(String[] skills) {
        this.skills = skills;
    }

    public String getResume_link() {
        return resume_link;
    }

    public void setResume_link(String resume_link) {
        this.resume_link = resume_link;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    public String getJob_type_preference() {
        return job_type_preference;
    }

    public void setJob_type_preference(String job_type_preference) {
        this.job_type_preference = job_type_preference;
    }

    public String getExpected_salary() {
        return expected_salary;
    }

    public void setExpected_salary(String expected_salary) {
        this.expected_salary = expected_salary;
    }

    public String getYear_of_graduation() {
        return year_of_graduation;
    }

    public void setYear_of_graduation(String year_of_graduation) {
        this.year_of_graduation = year_of_graduation;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    @Override
    public String toString() {
        return "updateJobSeekerProfileRequest{" +
                "full_name='" + full_name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", gender='" + gender + '\'' +
                ", brief_description='" + brief_description + '\'' +
                ", skills=" + Arrays.toString(skills) +
                ", resume_link='" + resume_link + '\'' +
                ", user_role='" + user_role + '\'' +
                ", job_type_preference='" + job_type_preference + '\'' +
                ", expected_salary='" + expected_salary + '\'' +
                ", year_of_graduation='" + year_of_graduation + '\'' +
                ", degree='" + degree + '\'' +
                ", major='" + major + '\'' +
                '}';
    }
}
