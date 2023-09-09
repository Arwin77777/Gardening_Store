package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.SellerProduct;

public interface SellerProductRepository extends JpaRepository<SellerProduct,Long> {

	@Query("select u from SellerProduct u where u.category=:a")
	List<SellerProduct> findPlants(@Param("a") String plants);
	
	@Query("SELECT u FROM SellerProduct u WHERE u.category LIKE %:b% OR u.name LIKE %:b%")
	List<SellerProduct> getProd(@Param("b") String prod);
}
