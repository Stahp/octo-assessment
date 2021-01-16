package com.octo.assessmentservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Space {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
    private String description;
    private Date creationDate;
    private Boolean privacy;
    @OneToMany(mappedBy = "space")
    private List<Subspace> subspaces = new ArrayList<>();
    
	protected Space() {}  // The default constructor exists only for the sake of JPA. You do not use it directly, so it is designated as protected
	public Space(@JsonProperty("name") String name,@JsonProperty("description") String description) {
		super();
		this.name = name;
		this.description = description;
		this.creationDate= new Date(System.currentTimeMillis());
		this.setPrivacy(false);
	}
	
	public Long getId() {
		return Id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	} 
	public List<Subspace> getSubspaces() {
		return subspaces;
	}
	public void setSubspaces(List<Subspace> subspaces) {
		this.subspaces = subspaces;
	}
	public Boolean getPrivacy() {
		return privacy;
	}
	public void setPrivacy(Boolean privacy) {
		this.privacy = privacy;
	}
}
