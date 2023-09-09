package com.example.demo.controller;

import java.security.Principal;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Order;
import com.example.demo.Models.OrderItem;
import com.example.demo.Models.User;
import com.example.demo.Repositories.OrderRepository;
import com.example.demo.Repositories.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("api/v1/auth")
@CrossOrigin
public class OrderController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private OrderRepository orderRepository;
	
	
	@PostMapping("/order")
	public Order userOrder(Principal principal,@RequestBody Order order)
	{
		String mail = principal.getName();
		Long temp=userRepository.getId(mail);
		User user = userRepository.findById(temp)	
		.orElseThrow(() -> new EntityNotFoundException("User with email " + mail + " not found"));
				
		order.setUser(user);
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		LocalDate date = LocalDate.now();   
		order.setOrder_date(date);   
		order.setPayment_status("false");
		return orderRepository.save(order);
	}
	
//	@PostMapping("/orderitems")
//	public List<OrderItem> orderItems(Principal principal,@RequestBody OrderItem orderItem)
//	{
//		String mail = principal.getName();
//		Long temp=userRepository.getId(mail);
//		List<Long> stemp = orderRepository.getId(temp);
//
//	}
	
	
}
