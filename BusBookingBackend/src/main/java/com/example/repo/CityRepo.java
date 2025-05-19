package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dto.CityDto;

public interface CityRepo extends JpaRepository<CityDto, Integer> {

}
