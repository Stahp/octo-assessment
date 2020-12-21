package com.octo.assessmentservice.controllers;


import com.octo.assessmentservice.models.Answer;
import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.services.AnswerService;
import com.octo.assessmentservice.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Answer> getAnswers() {
        return answerService.getAnswers();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Answer getAnswer(@PathVariable Long id) {
        return answerService.getAnswer(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Answer addAnswer(@RequestBody Answer answer) {
        return answerService.addAnswer(answer);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Answer updateAnswer(@RequestBody Answer answer, @PathVariable Long id) {
        return answerService.updateAnswer(answer, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteAnswer(@PathVariable Long id) {
        answerService.deleteAnswer(id);
    }
}
