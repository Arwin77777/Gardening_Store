package com.example.demo.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.User;

public interface UserRepository extends JpaRepository<User,Long>{
	Optional<User> findByEmail(String email);

	
	@Query("select u.id from User u where u.email=:a")
	Long getId(@Param("a") String mail1);

	@Query("select u.name from User u  where u.email=:a")
	String getNa(@Param("a") String mail);
}
