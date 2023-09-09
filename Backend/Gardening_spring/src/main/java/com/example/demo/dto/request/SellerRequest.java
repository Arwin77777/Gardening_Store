package com.example.demo.dto.request;

import com.example.demo.Models.Seller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SellerRequest {
	private Seller seller;
}
