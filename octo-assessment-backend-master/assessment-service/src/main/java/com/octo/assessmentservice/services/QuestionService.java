package com.octo.assessmentservice.services;


import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.repositories.QuestionRepository;
import com.octo.assessmentservice.repositories.SpaceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getQuestions() {
        return questionRepository.findAll();
    }

    public Question getQuestion(Long id) {
        if (questionRepository.findById(id).isPresent())
            return questionRepository.findById(id).get();
        return null;
    }

    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question newQuestion, Long id) {

        if (questionRepository.findById(id).isPresent()) {
            Question question = questionRepository.findById(id).get();
            question.setMedia(newQuestion.getMedia());
            question.setQuestion(newQuestion.getQuestion());
            return question;
        } else {
            return null;
        }
    }

    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
}
