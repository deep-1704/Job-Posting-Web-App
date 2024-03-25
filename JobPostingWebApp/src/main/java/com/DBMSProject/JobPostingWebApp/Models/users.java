package com.DBMSProject.JobPostingWebApp.Models;

public class users {
    private String username;
    private String password;
    private String full_name;
    private String email;
    private String user_role;
    private boolean enabled;
    private String phone;
    private String gender;

    public users() {
    }

    public users(String username, String password, String full_name, String email, String user_role, boolean enabled, String phone, String gender) {
        this.username = username;
        this.password = password;
        this.full_name = full_name;
        this.email = email;
        this.user_role = user_role;
        this.enabled = enabled;
        this.phone = phone;
        this.gender = gender;
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

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", full_name='" + full_name + '\'' +
                ", email='" + email + '\'' +
                ", user_role='" + user_role + '\'' +
                ", enabled=" + enabled +
                ", phone='" + phone + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}

