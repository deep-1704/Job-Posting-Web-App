package com.DBMSProject.JobPostingWebApp.Models;

public class job_seekers {

    private String username;
    private String brief_description;
    private String resume_link;
    private String job_type_preference;
    private String expected_salary;
    private String year_of_graduation;
    private String degree;
    private String major;

    public job_seekers() {
    }

    public job_seekers(String username, String brief_description, String resume_link, String job_type_preference, String expected_salary, String year_of_graduation, String degree, String major) {
        this.username = username;
        this.brief_description = brief_description;
        this.resume_link = resume_link;
        this.job_type_preference = job_type_preference;
        this.expected_salary = expected_salary;
        this.year_of_graduation = year_of_graduation;
        this.degree = degree;
        this.major = major;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBrief_description() {
        return brief_description;
    }

    public void setBrief_description(String brief_description) {
        this.brief_description = brief_description;
    }

    public String getResume_link() {
        return resume_link;
    }

    public void setResume_link(String resume_link) {
        this.resume_link = resume_link;
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
        return "job_seekers{" +
                "username='" + username + '\'' +
                ", brief_description='" + brief_description + '\'' +
                ", resume_link='" + resume_link + '\'' +
                ", job_type_preference='" + job_type_preference + '\'' +
                ", expected_salary='" + expected_salary + '\'' +
                ", year_of_graduation='" + year_of_graduation + '\'' +
                ", degree='" + degree + '\'' +
                ", major='" + major + '\'' +
                '}';
    }
}
