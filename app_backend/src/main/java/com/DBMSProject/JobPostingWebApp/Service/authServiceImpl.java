package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.authDAO;
import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class authServiceImpl implements authService {

    @Autowired
    public authServiceImpl(authDAO authDAO) {
        this.authDAO = authDAO;
    }

    private authDAO authDAO;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    private jwtUtils jwtUtils = new jwtUtils();


    public loginUserResponse loginUser(String username, String password, String user_role) {
        users tempUser = authDAO.getUser(username);
        if (tempUser == null) {
            return null;
        }
        if (bCryptPasswordEncoder.matches(password, tempUser.getPassword())) {
            user_role= tempUser.getUser_role();
            return new loginUserResponse("Bearer "+jwtUtils.generateToken(username,password,user_role));
        }

        return new loginUserResponse(null);
    }

    public loginUserResponse registerUser(String username, String password, String full_name, String email, String user_role,boolean enabled ,String phone, String gender) {
        users tempUser = authDAO.getUser(username);
        if (tempUser != null) {
            return null;
        }
        tempUser = new users(username, bCryptPasswordEncoder.encode(password), full_name, email, user_role, true, phone, gender);
        tempUser = authDAO.saveUser(tempUser);
        if (tempUser != null) {
            return new loginUserResponse("Bearer "+jwtUtils.generateToken(username, password,user_role));
        }
        return null;

    }


}
