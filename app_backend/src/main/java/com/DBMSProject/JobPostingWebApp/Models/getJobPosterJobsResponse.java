package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Date;
import java.util.List;

public class getJobPosterJobsResponse {
    private int job_id;
    private String job_title;
    private String job_description;
    private String job_poster;
    private int job_vacancy;
    private List<String> job_location;
    private List<String> job_skills;
    private int job_salary;
    private String job_type;
    private Date job_date_posted;
    private Date job_deadline;
    private List<String> company;
    private int total_applications;


    public getJobPosterJobsResponse() {
    }

    public getJobPosterJobsResponse(int job_id, String job_title, String job_description, String job_poster, int job_vacancy, List<String> job_location, List<String> job_skills, int job_salary, String job_type, Date job_date_posted, Date job_deadline, List<String> company, int total_applications) {
        this.job_id = job_id;
        this.job_title = job_title;
        this.job_description = job_description;
        this.job_poster = job_poster;
        this.job_vacancy = job_vacancy;
        this.job_location = job_location;
        this.job_skills = job_skills;
        this.job_salary = job_salary;
        this.job_type = job_type;
        this.job_date_posted = job_date_posted;
        this.job_deadline = job_deadline;
        this.company = company;
        this.total_applications = total_applications;
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

    public String getJob_description() {
        return job_description;
    }

    public void setJob_description(String job_description) {
        this.job_description = job_description;
    }

    public String getJob_poster() {
        return job_poster;
    }

    public void setJob_poster(String job_poster) {
        this.job_poster = job_poster;
    }

    public int getJob_vacancy() {
        return job_vacancy;
    }

    public void setJob_vacancy(int job_vacancy) {
        this.job_vacancy = job_vacancy;
    }

    public List<String> getJob_location() {
        return job_location;
    }

    public void setJob_location(List<String> job_location) {
        this.job_location = job_location;
    }

    public List<String> getJob_skills() {
        return job_skills;
    }

    public void setJob_skills(List<String> job_skills) {
        this.job_skills = job_skills;
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

    public Date getJob_date_posted() {
        return job_date_posted;
    }

    public void setJob_date_posted(Date job_date_posted) {
        this.job_date_posted = job_date_posted;
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

    public int getTotal_applications() {
        return total_applications;
    }

    public void setTotal_applications(int total_applications) {
        this.total_applications = total_applications;
    }

    @Override
    public String toString() {
        return "getJobPosterJobsResponse{" +
                "job_id=" + job_id +
                ", job_title='" + job_title + '\'' +
                ", job_description='" + job_description + '\'' +
                ", job_poster='" + job_poster + '\'' +
                ", job_vacancy=" + job_vacancy +
                ", job_location=" + job_location +
                ", job_skills=" + job_skills +
                ", job_salary=" + job_salary +
                ", job_type='" + job_type + '\'' +
                ", job_date_posted=" + job_date_posted +
                ", job_deadline=" + job_deadline +
                ", company=" + company +
                ", total_applications=" + total_applications +
                '}';
    }
}
