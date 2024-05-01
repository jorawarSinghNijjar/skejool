package com.ebnite.skejool.services;

import com.ebnite.skejool.entity.User;
import com.ebnite.skejool.payload.SigninRequest;
import com.ebnite.skejool.payload.SignupRequest;
import com.ebnite.skejool.payload.response.JwtResponse;
import com.ebnite.skejool.repository.UserRepository;
import com.ebnite.skejool.security.UserDetailsImpl;
import com.ebnite.skejool.util.JwtHepler;
import org.postgresql.core.Encoding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    public User registerUser(SignupRequest signupRequest){
       Optional<User> existingUser = userRepository.findByEmail(signupRequest.getEmail());

       if(existingUser.isPresent()){
           throw new DuplicateKeyException("Email already exists");
       }

        String hashedPassword = passwordEncoder.encode(signupRequest.getPassword());
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setPassword(hashedPassword);

        User savedUser = userRepository.save(user);
        return savedUser;

    }

    public JwtResponse signin(SigninRequest signinRequest) {
         Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()
                ));
        String token =  JwtHepler.generateToken(signinRequest.getEmail());

        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();

        JwtResponse signInResponse = new JwtResponse();
        signInResponse.setAccessToken(token);
        signInResponse.setEmail(user.getUsername());
        signInResponse.setId(user.getId());

        return signInResponse;
    }
}
