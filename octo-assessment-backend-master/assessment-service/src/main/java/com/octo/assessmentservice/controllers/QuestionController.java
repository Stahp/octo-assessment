package com.octo.assessmentservice.controllers;

import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.services.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Question> getQuestions() {
        return questionService.getQuestions();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Question getQuestion(@PathVariable Long id) {
        return questionService.getQuestion(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Question addQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Question updateQuestion(@RequestBody Question question, @PathVariable Long id) {
        return questionService.updateQuestion(question, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
    }
}
