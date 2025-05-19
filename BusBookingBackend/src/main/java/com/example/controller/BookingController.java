package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.BookingDao;
import com.example.dto.BookingDto;

@RestController
@CrossOrigin(origins = "*")
public class BookingController {

	
	@Autowired 
	BookingDao dao;
	
	@PostMapping("/login")
	public BookingDto loginDetails(@RequestBody BookingDto dto)
	{
	return dao.loginDetails(dto);	
	}
	
	
}
