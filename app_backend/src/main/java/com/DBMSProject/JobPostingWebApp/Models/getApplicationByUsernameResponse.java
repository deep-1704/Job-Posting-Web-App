package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Date;
import java.util.List;

public class getApplicationByUsernameResponse {
    private int job_id;
    private String job_title;
    private List<String> job_location;
    private String job_type;
    private Date job_deadline;
    private List<String> company;
    private Date application_date;
    private String application_status;

    public getApplicationByUsernameResponse() {
    }
    public getApplicationByUsernameResponse(int job_id, String job_title, List<String> job_location, String job_type, Date job_deadline, List<String> company, Date application_date, String application_status) {
        this.job_id = job_id;
        this.job_title = job_title;
        this.job_location = job_location;
        this.job_type = job_type;
        this.job_deadline = job_deadline;
        this.company = company;
        this.application_date = application_date;
        this.application_status = application_status;
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

    public String getJob_type() {
        return job_type;
    }

    public void setJob_type(String job_type) {
        this.job_type = job_type;
    }

    public Date getJob_deadline() {
        return job_deadline;
    }

    public void setJob_deadline(Date job_deadline) {
        this.job_deadline = job_deadline;
    }

    public List<String> getCompany() {
        return company;
    }

    public void setCompany(List<String> company) {
        this.company = company;
    }

    public Date getApplication_date() {
        return application_date;
    }

    public void setApplication_date(Date application_date) {
        this.application_date = application_date;
    }

    public String getApplication_status() {
        return application_status;
    }

    public void setApplication_status(String application_status) {
        this.application_status = application_status;
    }

    @Override
    public String toString() {
        return "getApplicationByUsernameResponse{" +
                "job_id=" + job_id +
                ", job_title='" + job_title + '\'' +
                ", job_location=" + job_location +
                ", job_type='" + job_type + '\'' +
                ", job_deadline=" + job_deadline +
                ", company=" + company +
                ", application_date=" + application_date +
                ", application_status='" + application_status + '\'' +
                '}';
    }
}
