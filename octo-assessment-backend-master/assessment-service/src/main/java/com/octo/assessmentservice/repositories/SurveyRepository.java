package com.octo.assessmentservice.repositories;

import com.octo.assessmentservice.models.Section;
import com.octo.assessmentservice.models.Subspace;
import com.octo.assessmentservice.models.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    @Query(value = "SELECT * FROM survey WHERE subspace_id = ?1 ", nativeQuery = true)
    List<Survey> getAllSurveysofSubspace(long subspace_id);
}