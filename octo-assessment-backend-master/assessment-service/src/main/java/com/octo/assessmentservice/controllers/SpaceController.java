package com.octo.assessmentservice.controllers;

import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.services.SpaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/spaces")
public class SpaceController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpaceController.class);

    @Autowired
    private SpaceService spaceService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Space> getSpaces() {
        return spaceService.getSpaces();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Space getSpace(@PathVariable Long id) {
        return spaceService.getSpace(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Space addSpace(@RequestBody Space space) {
        return spaceService.addSpace(space);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Space updateSpace(@RequestBody Space space, @PathVariable Long id) {
        return spaceService.updateSpace(space, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSpace(@PathVariable Long id) {
        spaceService.deleteSpace(id);
    }
}
