package com.octo.assessmentservice.services;

import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.models.Subspace;
import com.octo.assessmentservice.models.Survey;
import com.octo.assessmentservice.repositories.SpaceRepository;
import com.octo.assessmentservice.repositories.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Service
public class SurveyService {
    @Autowired
    private SurveyRepository surveyRepository;

    public List<Survey> getSurveys() {
        return surveyRepository.findAll();
    }

    public Survey getSurvey(Long id) {
        if (surveyRepository.findById(id).isPresent())
            return surveyRepository.findById(id).get();
        return null;
    }

    public Survey addSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public Survey updateSurvey(Survey newSurvey, Long id) {

        if (surveyRepository.findById(id).isPresent()) {
            Survey survey = surveyRepository.findById(id).get();
            survey.setName(newSurvey.getName());
            survey.setDescription(newSurvey.getDescription());
            survey.setState(newSurvey.getState());
            return survey;
        } else {
            return null;
        }
    }

    public void deleteSurvey(Long id) {
        surveyRepository.deleteById(id);
    }

    public List<Survey> getAllSurveysofSubspace(long subspace_id) {
        return surveyRepository.getAllSurveysofSubspace(subspace_id);
    }
}
