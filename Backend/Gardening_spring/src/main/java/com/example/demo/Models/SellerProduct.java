package com.example.demo.Models;

import java.math.BigDecimal;

import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SellerProducts")
@Data	
@Builder
@AllArgsConstructor
public class SellerProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;

    private String name;
    private String description;
    private BigDecimal price;
    private String image_url;
    private String category;

    public SellerProduct() {}

    public SellerProduct(Seller seller, String name, String description, BigDecimal price, String image_url, String category) {
        this.seller = seller;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
        this.category = category;
    }

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller2) {
		this.seller = seller2;
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
}
