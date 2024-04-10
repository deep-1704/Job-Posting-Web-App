package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Date;
import java.util.List;

public class getJobSeekerJobsResponse {
    private int job_id;
    private String job_title;
    private List<String> job_location;
    private int job_salary;
    private String job_type;
    private Date deadline;
    private List<String> company;

    public getJobSeekerJobsResponse(){

    }

    public getJobSeekerJobsResponse(int job_id, String job_title, List<String> job_location, int job_salary, String job_type, Date deadline, List<String> company) {
        this.job_id = job_id;
        this.job_title = job_title;
        this.job_location = job_location;
        this.job_salary = job_salary;
        this.job_type = job_type;
        this.deadline = deadline;
        this.company = company;
    }

    public int getJob_id() {
        return job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public List<String> getJob_location() {
        return job_location;
    }

    public void setJob_location(List<String> job_location) {
        this.job_location = job_location;
    }

    public int getJob_salary() {
        return job_salary;
    }

    public void setJob_salary(int job_salary) {
        this.job_salary = job_salary;
    }

    public String getJob_type() {
        return job_type;
    }

    public void setJob_type(String job_type) {
        this.job_type = job_type;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public List<String> getCompany() {
        return company;
    }

    public void setCompany(List<String> company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "getJobSeekerJobsResponse{" +
                "job_id=" + job_id +
                ", job_title='" + job_title + '\'' +
                ", job_location=" + job_location +
                ", job_salary=" + job_salary +
                ", job_type='" + job_type + '\'' +
                ", deadline=" + deadline +
                ", company=" + company +
                '}';
    }
}
