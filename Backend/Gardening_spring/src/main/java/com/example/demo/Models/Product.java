package com.example.demo.Models;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Products")
public class Product {

    @Id
    private Long product_id;
    private String name;
    private String description;
    private BigDecimal price;
    private String image_url;
    private String category;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    public Product() {}

    public Product(String name, String description, BigDecimal price, String image_url, String category,User user) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
        this.category = category;
        this.user = user;
    }

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	public void setUser(User user)
	{
		this.user= user;
	}
	public User getUser()
	{
		return user;
	}
	

    
}
