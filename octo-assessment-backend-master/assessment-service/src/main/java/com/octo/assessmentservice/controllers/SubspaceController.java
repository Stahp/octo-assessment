package com.octo.assessmentservice.controllers;

import com.octo.assessmentservice.models.Subspace;
import com.octo.assessmentservice.services.SubspaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/subspaces")
public class SubspaceController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpaceController.class);

    @Autowired
    private SubspaceService subspaceService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Subspace> getSubspaces() {
        return subspaceService.getSubspaces();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Subspace getSubspace(@PathVariable Long id) {
        return subspaceService.getSubspace(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Subspace addSubspace(@RequestBody Subspace subspace) {
        return subspaceService.addSubspace(subspace);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Subspace updateSubspace(@RequestBody Subspace subspace, @PathVariable Long id) {
        return subspaceService.updateSubspace(subspace, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSubspace(@PathVariable Long id) {
        subspaceService.deleteSubspace(id);
    }
    @RequestMapping(value= "all/{id}")
    public @ResponseBody
    List<Subspace> getAllSubspacesOfSpace(@PathVariable("id") long space_id ){
        List<Subspace> subspaces = null ;
        try{
            subspaces=subspaceService. getAllSubspacesofSpace(space_id);

        }catch(Exception e){
            e.printStackTrace();
        }
        return subspaces;
    }
}
