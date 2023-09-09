package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

	@Query("select u from Product u where u.user.id=:a")
	List<Product> getCart(@Param("a") Long temp);
	
//	@Query("select u.user_id from Product u where u.user.id=:a")
//	Long getId(@Param("a") Long temp);

}
