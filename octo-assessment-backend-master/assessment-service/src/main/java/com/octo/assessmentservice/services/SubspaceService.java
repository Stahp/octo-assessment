package com.octo.assessmentservice.services;

import com.octo.assessmentservice.models.Subspace;
import com.octo.assessmentservice.repositories.SubspaceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubspaceService {

    private static final Logger LOGGER = LoggerFactory.getLogger(Subspace.class);

    @Autowired
    private SubspaceRepository subspaceRepository;

    public List<Subspace> getSubspaces() {
        return subspaceRepository.findAll();
    }

    public Subspace getSubspace(Long id) {
    	Subspace subspace= subspaceRepository.findById(id).get();
        return subspace;
    }

    public Subspace addSubspace(Subspace subspace) {
        return subspaceRepository.save(subspace);
    }

    public Subspace updateSubspace(Subspace newSubspace, Long id) {
        return subspaceRepository.findById(id)
                .map(subspace -> {
                    subspace.setName(newSubspace.getName());
                    subspace.setDescription(newSubspace.getDescription());
                    subspace.setCreationDate(newSubspace.getCreationDate());
                    subspace.setSpace(newSubspace.getSpace());
                    return (subspaceRepository.save(subspace));
                }).get();
    }

    public void deleteSubspace(Long id) {
        subspaceRepository.deleteById(id);
    }

    public List<Subspace> getAllSubspacesofSpace(long space_id) {
        return subspaceRepository.getAllSubspacesofSpace(space_id);
    }


}
