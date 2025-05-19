

package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.dto.BookingDto;
import com.example.dto.CityDto;
import com.example.repo.BookingRepo;
import com.example.repo.CityRepo;

@Repository
public class BookingDao {

    @Autowired
    BookingRepo repo;
    
    @Autowired
    CityRepo rep;

    
    public BookingDto loginDetails(BookingDto dto)
	{
	return repo.save(dto);
		
	}
    
    
    public CityDto cityDetails(CityDto dto) {
        return rep.save(dto);
    }
}
