package com.ebnite.skejool.controller;

import com.ebnite.skejool.payload.SigninRequest;
import com.ebnite.skejool.payload.SignupRequest;
import com.ebnite.skejool.services.AuthService;
import io.micrometer.common.util.internal.logging.InternalLogger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        logger.info("Registering user: {}", signUpRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registerUser(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SigninRequest signinRequest) {
        logger.info("Logging in user: {}", signinRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.signin(signinRequest));
    }
}
