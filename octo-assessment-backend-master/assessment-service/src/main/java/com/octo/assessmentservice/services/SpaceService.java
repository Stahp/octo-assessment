package com.octo.assessmentservice.services;

import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.repositories.SpaceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@Service
public class SpaceService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpaceService.class);

    @Autowired
    private SpaceRepository spaceRepository;

    public List<Space> getSpaces() {
        return spaceRepository.findAll();
    }

    public Space getSpace(Long id) {
        if (spaceRepository.findById(id).isPresent())
            return spaceRepository.findById(id).get();
        return null;
    }

    public Space addSpace(Space space) {
        return spaceRepository.save(space);
    }

    public Space updateSpace(Space newSpace, Long id) {

        if (spaceRepository.findById(id).isPresent()) {
            Space space = spaceRepository.findById(id).get();
            space.setName(newSpace.getName());
            space.setDescription(newSpace.getDescription());
            space.setCreationDate(newSpace.getCreationDate());
            space.setSubspaces(newSpace.getSubspaces());
            return space;
        } else {
            return null;
        }
    }

    public void deleteSpace(Long id) {
        spaceRepository.deleteById(id);
    }
}
