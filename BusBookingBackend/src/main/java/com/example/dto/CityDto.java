package com.example.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


	
	@Entity
	@Setter
	@Getter
	@AllArgsConstructor
	@NoArgsConstructor
	@Table(name = "city_dto")
	public class CityDto {
	    
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;

	    private String date;

	   
	    private String fromCity;

	    
	    private String toCity;

	   
	
}
