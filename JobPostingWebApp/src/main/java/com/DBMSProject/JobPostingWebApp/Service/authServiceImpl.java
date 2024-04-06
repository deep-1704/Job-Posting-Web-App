package com.DBMSProject.JobPostingWebApp.Service;

import com.DBMSProject.JobPostingWebApp.DAO.authDAO;
import com.DBMSProject.JobPostingWebApp.Models.loginUserResponse;
import com.DBMSProject.JobPostingWebApp.Models.users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class authServiceImpl implements authService{

    @Autowired
    public authServiceImpl(authDAO authDAO) {
        this.authDAO = authDAO;
    }

    private authDAO authDAO;

    @Value("${app.secretKey}")
    private String SECRET_KEY;

    @Value("${app.tokenExpiration}")
    private long expirationTime;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();


    public String generateToken(String username, String password) {
        byte[] keyBytes = SECRET_KEY.getBytes(StandardCharsets.UTF_8);
        Key signingKey = new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());

        return Jwts.builder()
                .setSubject(username)
                .setSubject(password)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(signingKey, SignatureAlgorithm.HS256)
                .compact();
    }

    public loginUserResponse loginUser(String username, String password) {
        users tempUser = authDAO.getUser(username);
        if(tempUser==null) {
            return null;
        }
        if(bCryptPasswordEncoder.matches(password, tempUser.getPassword())) {
            return new loginUserResponse(generateToken(username, password));
        }

        return new loginUserResponse(null);
    }
}
