package com.octo.assessmentservice.controllers;

import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.models.Subspace;
import com.octo.assessmentservice.models.Survey;
import com.octo.assessmentservice.services.SpaceService;
import com.octo.assessmentservice.services.SurveyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/surveys")
public class SurveyController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpaceController.class);

    @Autowired
    private SurveyService surveyService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Survey> getSurveys() {
        return surveyService.getSurveys();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Survey getSurvey(@PathVariable Long id) {
        return surveyService.getSurvey(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Survey addSurvey(@RequestBody Survey survey) {
        return surveyService.addSurvey(survey);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Survey updateSurvey(@RequestBody Survey survey, @PathVariable Long id) {
        return surveyService.updateSurvey(survey, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSurvey(@PathVariable Long id) {
        surveyService.deleteSurvey(id);
    }

    @RequestMapping(value= "all/{id}")
    public @ResponseBody
    List<Survey> getAllSurveysOfSpace(@PathVariable("id") long subspace_id ){
        List<Survey> surveys = null ;
        try{
            surveys=surveyService.getAllSurveysofSubspace(subspace_id);

        }catch(Exception e){
            e.printStackTrace();
        }
        return surveys;
    }
}
