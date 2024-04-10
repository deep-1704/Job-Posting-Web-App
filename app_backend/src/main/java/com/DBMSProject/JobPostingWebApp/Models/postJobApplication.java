package com.DBMSProject.JobPostingWebApp.Models;

import java.util.Date;

public class postJobApplication {
    private int job_id;
    private Date application_date;
    private String application_status;

    private postJobApplication(){

    }

    public postJobApplication(int job_id, Date application_date, String application_status) {
        this.job_id = job_id;
        this.application_date = application_date;
        this.application_status = application_status;
    }

    public int getJob_id() {
        return job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
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
        return "postJobApplication{" +
                "job_id=" + job_id +
                ", application_date=" + application_date +
                ", application_status='" + application_status + '\'' +
                '}';
    }
}
