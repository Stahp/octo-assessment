package com.octo.assessmentservice.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class AssessmentController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
    @RequestMapping("/home")
    public String home (){
        LOGGER.info("INFO FROM HOME PAGE");
        return "Hello from assessment-service home page !";
    }

    @RequestMapping("/admin")
    public String assessment (){
        return "Hello from assessment-service admin space !";
    }
}
