package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Seller;

public interface SellerRepository extends JpaRepository<Seller,Long> {

	@Query("select u.seller_id from Seller u where u.user.id=:a")
	Long getId(@Param("a") Long temp);
	
}
