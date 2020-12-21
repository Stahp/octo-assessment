package com.octo.assessmentservice.repositories;

import com.octo.assessmentservice.models.Space;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
public interface SpaceRepository extends JpaRepository<Space, Long> {
    public List<Space> getSpaceByName(String name);
}
