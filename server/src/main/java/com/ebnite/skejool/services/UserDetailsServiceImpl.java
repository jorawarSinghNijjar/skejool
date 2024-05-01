package com.ebnite.skejool.services;

import com.ebnite.skejool.entity.User;
import com.ebnite.skejool.repository.UserRepository;
import com.ebnite.skejool.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));

        UserDetailsImpl userDetails = UserDetailsImpl.build(user);
//        return org.springframework.security.core.userdetails.User.builder()
//                .username(user.getEmail())
//                .password(user.getPassword())
//                .build();
        return userDetails;
    }
}
