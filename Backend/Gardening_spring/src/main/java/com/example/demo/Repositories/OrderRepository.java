package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

	@Query("select u.order_id from Order u where u.user.id=:a")
	List<Long> getId(@Param("a") Long temp);
	
}
