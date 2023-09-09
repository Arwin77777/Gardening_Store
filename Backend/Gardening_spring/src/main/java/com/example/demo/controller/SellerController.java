package com.example.demo.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Models.Product;
import com.example.demo.Models.Seller;
import com.example.demo.Models.SellerProduct;
import com.example.demo.Models.User;
import com.example.demo.Repositories.ProductRepository;
import com.example.demo.Repositories.SellerProductRepository;
import com.example.demo.Repositories.SellerRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.dto.request.SellerRequest;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("api/v1/auth")
@CrossOrigin
public class SellerController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private SellerRepository sellerRepository;
	@Autowired
	private SellerProductRepository spRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	RestTemplate rest;
	
	@PostMapping("/addseller")
	public Seller currentUserName(EntityManager entityManager,Principal principal,@RequestBody Seller seller) {
	     	String mail =  principal.getName();

		User user = userRepository.findByEmail(mail)
		
		.orElseThrow(() -> new EntityNotFoundException("User with email " + mail + " not found"));
		
		seller.setUser(user);
		
		return sellerRepository.save(seller);
}
	@PostMapping("/addproducts")
	public SellerProduct sellProducts(Principal principal,EntityManager em,@RequestBody SellerProduct sellerProduct)
	{
		String mail = principal.getName();
		System.out.print(mail);
		Long temp=userRepository.getId(mail);
//		System.out.print(temp);
		Long stemp = sellerRepository.getId(temp);
		Seller seller = sellerRepository.findById(stemp)
				.orElseThrow(() -> new EntityNotFoundException("User with id " + stemp + " not found"));
		sellerProduct.setSeller(seller);
		return spRepository.save(sellerProduct);
	}

	@GetMapping("/getplants")
	public List<SellerProduct> getPlants()
	{
		return spRepository.findPlants("Plants");
//		return "sfb";
	}
	
	@GetMapping("/gettools")
	public List<SellerProduct> getTools()
	{
		return spRepository.findPlants("Tools");
	}
	
	
	@GetMapping("/getname")
	public String getName(Principal principal)
	{
		String mail = principal.getName();
		return userRepository.getNa(mail);
	}
	@GetMapping("/getgrocery")
	public List<SellerProduct> getGrocery()
	{
		return spRepository.findPlants("Grocery");
	}
	
	@GetMapping("/getdecor")
	public List<SellerProduct> getDecor()
	{
		return spRepository.findPlants("Decor");
	}
	
	@PostMapping("/addtocart")
	public Product addcart(Principal principal,@RequestBody Product product)
	{
		String mail = principal.getName();
		User user = userRepository.findByEmail(mail)
				
				.orElseThrow(() -> new EntityNotFoundException("User with email " + mail + " not found"));
				
				product.setUser(user);
		return productRepository.save(product);
	}
	
	@GetMapping("/getcart")
	public List<Product> getCart(Principal principal)
	{
		String mail = principal.getName();
		System.out.print(mail);
		Long temp=userRepository.getId(mail);
//		Long temp1 = productRepository.getId(temp);
		return productRepository.getCart(temp);
	}
	
	@DeleteMapping("/deleteitem/{id}")
	public void deleteCart(@PathVariable Long id)
	{
		productRepository.deleteById(id);
	}
	
	@PostMapping("/send")
    public ResponseEntity<String> sendDataToServerA(@RequestBody String data) {
        // Prepare the data to be sent to Server A
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> request = new HttpEntity<>(data, headers);

        // Replace "http://localhost:8081/api/send-data" with the actual URL of Server A's endpoint
        String serverAResponse = rest.postForObject("http://localhost:8081/send-data", request, String.class);

        return ResponseEntity.ok("Data sent to Server A. Response from Server A: " + serverAResponse);
    }
	
	@GetMapping("/get/search/{prod}")
    public List <SellerProduct> getProd(@PathVariable String prod){
    	return spRepository.getProd(prod);
    }
	
	@GetMapping("getuser")
    public User getUser(Principal principal)
    {
		String mail =  principal.getName();

		User user = userRepository.findByEmail(mail)
		
		.orElseThrow(() -> new EntityNotFoundException("User with email " + mail + " not found"));
		
		return user; 
    }
}
