
package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.BookingDao;
import com.example.dto.CityDto;

@RestController
@CrossOrigin(origins = "*")
public class CityController {

    @Autowired 
    private BookingDao dao;
    
    @PostMapping("/booking")
    public CityDto cityDetails(@RequestBody CityDto dto) {
        try {
            CityDto result = dao.cityDetails(dto);
            if (result != null) {
                return result;
            } else {
                throw new RuntimeException("Failed to save booking details.");
            }
        } catch (Exception e) {
            
            System.err.println("Error while processing city details: " + e.getMessage());
            throw new RuntimeException("An error occurred while processing the booking details.");
        }
    }
}
