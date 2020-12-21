package com.octo.assessmentservice.services;

import com.octo.assessmentservice.models.Answer;
import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.repositories.AnswerRepository;
import com.octo.assessmentservice.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Service
public class AnswerService {


    @Autowired
    private AnswerRepository answerRepository;

    public List<Answer> getAnswers() {
        return answerRepository.findAll();
    }

    public Answer getAnswer(Long id) {
        if (answerRepository.findById(id).isPresent())
            return answerRepository.findById(id).get();
        return null;
    }

    public Answer addAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer newAnswer, Long id) {

        if (answerRepository.findById(id).isPresent()) {
            Answer answer = answerRepository.findById(id).get();
            answer.setAnswer(newAnswer.getAnswer());
            answer.setScore(newAnswer.getScore());
            return answer;
        } else {
            return null;
        }
    }

    public void deleteAnswer(Long id) {
        answerRepository.deleteById(id);
    }
}
