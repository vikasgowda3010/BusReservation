package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dto.BookingDto;

public interface BookingRepo extends JpaRepository<BookingDto, Integer>{

}
