package com.octo.assessmentservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subspace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
	private String name;
	private String description;
    private Date creationDate;
    private Boolean privacy;
    private Long spaceid;
    @ManyToOne(cascade =CascadeType.ALL)
    private Space space;
    
    @OneToMany(mappedBy = "subspace")
    private List<Survey> surveys = new ArrayList<>();

    protected Subspace() {}
    
	public Subspace(@JsonProperty("name") String name,@JsonProperty("description") String description, @JsonProperty("spaceid") Long spaceid) {
		super();
		this.name = name;
		this.description = description;
		this.creationDate= new Date(System.currentTimeMillis());
		this.privacy= false;
		this.spaceid= spaceid;
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
    public Space getSpace() {
		return space;
	}
	public void setSpace(Space space) {
		this.space = space;
	}
	public List<Survey> getSurveys() {
		return surveys;
	}
	public void setSurveys(List<Survey> surveys) {
		this.surveys = surveys;
	}

	public Boolean getPrivacy() {
		return privacy;
	}

	public void setPrivacy(Boolean privacy) {
		this.privacy = privacy;
	}

	public Long getSpaceid() {
		return spaceid;
	}

	public void setSpaceid(Long spaceid) {
		this.spaceid = spaceid;
	}
}
