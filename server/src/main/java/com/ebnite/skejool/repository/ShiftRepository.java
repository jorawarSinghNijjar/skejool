package com.ebnite.skejool.repository;

import com.ebnite.skejool.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShiftRepository extends JpaRepository<Shift, Long> {
}