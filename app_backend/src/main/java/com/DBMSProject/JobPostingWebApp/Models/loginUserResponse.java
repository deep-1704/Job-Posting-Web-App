package com.DBMSProject.JobPostingWebApp.Models;

public class loginUserResponse {

    String token;


    public loginUserResponse() {
    }

    public loginUserResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


    @Override
    public String toString() {
        return "loginUserResponse{" +
                "token='" + token + '\'' +
                '}';
    }
}
