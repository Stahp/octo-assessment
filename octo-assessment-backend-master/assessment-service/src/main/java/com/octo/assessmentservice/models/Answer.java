package com.octo.assessmentservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
	private String answer;
    private int score;
    @ManyToOne
    private Question question;
    
    public String getAnswer() {
		return answer;
	}
	public int getScore() {
		return score;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public void setScore(int score) {
		this.score = score;
	}
	
}
