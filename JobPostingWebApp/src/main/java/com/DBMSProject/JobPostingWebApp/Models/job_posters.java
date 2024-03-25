package com.DBMSProject.JobPostingWebApp.Models;

public class job_posters {

    private String username;
    private String company_name;
    private String position;
    private String linkedin_link;

    public job_posters() {
    }

    public job_posters(String username, String company_name, String position, String linkedin_link) {
        this.username = username;
        this.company_name = company_name;
        this.position = position;
        this.linkedin_link = linkedin_link;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getLinkedin_link() {
        return linkedin_link;
    }

    public void setLinkedin_link(String linkedin_link) {
        this.linkedin_link = linkedin_link;
    }

    @Override
    public String toString() {
        return "job_posters{" +
                "username='" + username + '\'' +
                ", company_name='" + company_name + '\'' +
                ", position='" + position + '\'' +
                ", linkedin_link='" + linkedin_link + '\'' +
                '}';
    }
}
