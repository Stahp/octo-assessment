package com.octo.assessmentservice.repositories;

import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.models.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface QuestionRepository extends JpaRepository<Question, Long> {
}