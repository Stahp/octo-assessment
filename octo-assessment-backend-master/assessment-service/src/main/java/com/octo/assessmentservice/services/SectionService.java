package com.octo.assessmentservice.services;


import com.octo.assessmentservice.models.Question;
import com.octo.assessmentservice.models.Section;
import com.octo.assessmentservice.repositories.QuestionRepository;
import com.octo.assessmentservice.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Service
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    public List<Section> getSections() {
        return sectionRepository.findAll();
    }

    public Section getSection(Long id) {
        if (sectionRepository.findById(id).isPresent())
            return sectionRepository.findById(id).get();
        return null;
    }

    public Section addSection(Section section) {
        return sectionRepository.save(section);
    }

    public Section updateSection(Section newSection, Long id) {

        if (sectionRepository.findById(id).isPresent()) {
            Section section = sectionRepository.findById(id).get();
            section.setName(newSection.getName());
            return section;
        } else {
            return null;
        }
    }

    public void deleteSection(Long id) {
        sectionRepository.deleteById(id);
    }
}
