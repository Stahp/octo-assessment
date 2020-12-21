package com.octo.assessmentservice.repositories;

import com.octo.assessmentservice.models.Space;
import com.octo.assessmentservice.models.Subspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
public interface SubspaceRepository extends JpaRepository<Subspace, Long> {
    public List<Subspace> getSubspacesByName(String name);

    @Query(value = "SELECT * FROM subspace WHERE space_id = ?1 ", nativeQuery = true)
    List<Subspace> getAllSubspacesofSpace(long space_id);
}
