package com.example.demo.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Sellers")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long seller_id;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
    
    private String company_name;
    private String address;
    private String phone_number;

    public Seller() {}

    public Seller(User user, String company_name, String address, String phone_number) {
        this.user = user;
        this.company_name = company_name;
        this.address = address;
        this.phone_number = phone_number;
    }

	public Long getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(Long seller_id) {
		this.seller_id = seller_id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
}
