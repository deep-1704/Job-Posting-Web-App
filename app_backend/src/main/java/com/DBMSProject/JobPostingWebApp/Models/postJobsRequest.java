package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Arrays;
import java.util.Date;

public class postJobsRequest {

    private int job_id;
    private String job_title;
    private String job_description;
    private String job_poster;
    private int job_vacancy;
    private String job_location[];
    private String job_skills[];
    private int job_salary;
    private String job_type;
    private Date job_date_posted;
    private Date job_deadline;
    private String company[];

    public postJobsRequest() {
    }

    public postJobsRequest(int job_id, String job_title, String job_description, String job_poster, int job_vacancy, String[] job_location, String[] job_skills, int job_salary, String job_type, Date job_date_posted, Date job_deadline, String[] company) {
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

    public String[] getJob_location() {
        return job_location;
    }

    public void setJob_location(String[] job_location) {
        this.job_location = job_location;
    }

    public String[] getJob_skills() {
        return job_skills;
    }

    public void setJob_skills(String[] job_skills) {
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

    public String[] getCompany() {
        return company;
    }

    public void setCompany(String[] company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "postJobsRequest{" +
                "job_id=" + job_id +
                ", job_title='" + job_title + '\'' +
                ", job_description='" + job_description + '\'' +
                ", job_poster='" + job_poster + '\'' +
                ", job_vacancy='" + job_vacancy + '\'' +
                ", job_location=" + Arrays.toString(job_location) +
                ", job_skills=" + Arrays.toString(job_skills) +
                ", job_salary='" + job_salary + '\'' +
                ", job_type='" + job_type + '\'' +
                ", job_date_posted=" + job_date_posted +
                ", job_deadline=" + job_deadline +
                ", company=" + Arrays.toString(company) +
                '}';
    }
}
