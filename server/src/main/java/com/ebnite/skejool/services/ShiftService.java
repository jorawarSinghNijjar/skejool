package com.ebnite.skejool.services;

import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.repository.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShiftService {
    @Autowired
    private ShiftRepository shiftRepository;

    public Shift addShift(Shift shift){
        return shiftRepository.save(shift);
    }
}
