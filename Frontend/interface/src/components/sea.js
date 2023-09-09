import React from "react";
import Navbar from "./Home/Nav";
import { useState,useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import image from './images/carrot.jpeg';
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom";

export default function Sea (){
    const category=null;
    const [prods, setProds] = useState([]);
    const name=localStorage.getItem("sname");
    console.log(name);
    useEffect(() => {
        const tok = localStorage.getItem("token");
        axios
          .get(`http://localhost:8181/api/v1/auth/get/search/${name}`, {
            headers: {
              Authorization: `Bearer ${tok}`,
            },
          })
          .then(response => {
            console.log(response.data);
            setProds(response.data);
            category=response.data.category;
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      const navigate = useNavigate();
      const handleDetails = (cardDetails) =>
      {
        console.log("hi");
        localStorage.setItem("category",cardDetails.category);
        localStorage.setItem("description",cardDetails.description);
        localStorage.setItem("image_url",cardDetails.image_url);
        localStorage.setItem("name",cardDetails.name);
        localStorage.setItem("price",cardDetails.price);
        localStorage.setItem("product_id",cardDetails.product_id);
        // localStorage.setItem("owner",cardDetails.seller["company_name"]);
        // <Details></Details>
        navigate('/details');
      }
    return (
        <>
            <Navbar/>

            <div className="g-head" style={{ marginTop: "50px" }}>
        <h3 style={{color:'gray',marginLeft:'3%'}}>Showing results for your Search</h3>
        <h3 style={{color:'black'}}></h3>
      </div>
      <div className="template">

      
      <div className="g-Products" style={{ margin: '60px' }}>
        <div className="home-displays">
          {prods.map(prod => (
            <div onClick={()=>handleDetails(prod)}  key={prod.p_id} className="temp-card">
              <img className="groverys" src={image} alt="Product" />
              <h2 className="quote-word">{prod.name}</h2>
              <p className="author">{prod.description}</p>
              <p className="p-price"><strong>Price : </strong>{prod.price}</p>
              {/* <Button className="g-btn" onClick={() => handleBuy(prod.name, prod.description, prod.price)}>Buy Now</Button> */}
            </div>
          ))}
        </div>
      </div>
      </div>
        </>
    );
}