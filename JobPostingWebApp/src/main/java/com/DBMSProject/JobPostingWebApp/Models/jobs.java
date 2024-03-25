package com.DBMSProject.JobPostingWebApp.Models;

public class jobs {
    private int job_id;
    private String job_title;
    private String job_description;
    private String job_poster;
    private String job_type;
    private String job_location;
    private String job_salary;
    private String job_post_date;
    private String job_deadline;
    private int job_vacancy;
    private String relevant_company_link;

    public jobs() {
    }

    public jobs(int job_id, String job_title, String job_description, String job_poster, String job_type, String job_location, String job_salary, String job_post_date, String job_deadline, int job_vacancy, String relevant_company_link) {
        this.job_id = job_id;
        this.job_title = job_title;
        this.job_description = job_description;
        this.job_poster = job_poster;
        this.job_type = job_type;
        this.job_location = job_location;
        this.job_salary = job_salary;
        this.job_post_date = job_post_date;
        this.job_deadline = job_deadline;
        this.job_vacancy = job_vacancy;
        this.relevant_company_link = relevant_company_link;
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

    public String getJob_type() {
        return job_type;
    }

    public void setJob_type(String job_type) {
        this.job_type = job_type;
    }

    public String getJob_location() {
        return job_location;
    }

    public void setJob_location(String job_location) {
        this.job_location = job_location;
    }

    public String getJob_salary() {
        return job_salary;
    }

    public void setJob_salary(String job_salary) {
        this.job_salary = job_salary;
    }

    public String getJob_post_date() {
        return job_post_date;
    }

    public void setJob_post_date(String job_post_date) {
        this.job_post_date = job_post_date;
    }

    public String getJob_deadline() {
        return job_deadline;
    }

    public void setJob_deadline(String job_deadline) {
        this.job_deadline = job_deadline;
    }

    public int getJob_vacancy() {
        return job_vacancy;
    }

    public void setJob_vacancy(int job_vacancy) {
        this.job_vacancy = job_vacancy;
    }

    public String getRelevant_company_link() {
        return relevant_company_link;
    }

    public void setRelevant_company_link(String relevant_company_link) {
        this.relevant_company_link = relevant_company_link;
    }

    @Override
    public String toString() {
        return "jobs{" +
                "job_id=" + job_id +
                ", job_title='" + job_title + '\'' +
                ", job_description='" + job_description + '\'' +
                ", job_poster='" + job_poster + '\'' +
                ", job_type='" + job_type + '\'' +
                ", job_location='" + job_location + '\'' +
                ", job_salary='" + job_salary + '\'' +
                ", job_post_date='" + job_post_date + '\'' +
                ", job_deadline='" + job_deadline + '\'' +
                ", job_vacancy=" + job_vacancy +
                ", relevant_company_link='" + relevant_company_link + '\'' +
                '}';
    }
}
