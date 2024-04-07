package com.DBMSProject.JobPostingWebApp.Models;

public class loginUserRequest {

    private String username;
    private String password;
    private String user_role;

    public loginUserRequest() {
    }

    public loginUserRequest(String username, String password, String user_role) {
        this.username = username;
        this.password = password;
        this.user_role = user_role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    @Override
    public String toString() {
        return "loginUser{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", user_role='" + user_role + '\'' +
                '}';
    }
}
