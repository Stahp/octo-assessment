package com.octo.assessmentservice.controllers;

import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.models.Section;
import com.octo.assessmentservice.repositories.SectionRepository;
import com.octo.assessmentservice.services.QuestionService;
import com.octo.assessmentservice.services.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/sections")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Section> getSections() {
        return sectionService.getSections();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Section getSection(@PathVariable Long id) {
        return sectionService.getSection(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Section addSection(@RequestBody Section section) {
        return sectionService.addSection(section);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Section updateSection(@RequestBody Section section, @PathVariable Long id) {
        return sectionService.updateSection(section, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSection(@PathVariable Long id) {
        sectionService.deleteSection(id);
    }
}
