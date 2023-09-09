import React from 'react';
import Nav from './Home/Nav';
import tomato from './images/tomato.jpeg';
import Ratings from './productdetails/rating';
import './desc.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
import axios from 'axios';

const Details = ({data}) => {
  console.log(localStorage.getItem("owner"));

  const details = {
    product_id:localStorage.getItem("product_id"),
    name:localStorage.getItem("name"),
    description:localStorage.getItem("description"),
    price:localStorage.getItem("price"),
    image_url:"sjhdweu23",
    category:localStorage.getItem("category")
  }
  const handleSubmit = async(e) =>
  { 
    try {
      const tok = localStorage.getItem('token');
      console.log("first");
      console.log(tok);
      const response = await axios.post('http://localhost:8181/api/v1/auth/addtocart', details, {
        headers: {
          Authorization: `Bearer ${tok}`
        }
      });
      console.log("Response:", response);
      alert("Item added to cart");
    } catch (error) {
      console.error("Error:", error);
    }

  }
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        
          <div className="product">
            <div className="product-image">
              <img src={tomato}  />
            </div>
            <div className="product-details">
              <h2>{localStorage.getItem("name")}</h2>
              <p>{localStorage.getItem("description")}</p>
              <p>
                
                <b style={{ fontSize: '20px', color: 'green' }}>${localStorage.getItem("price")}</b>
              </p>
              <p><b>Sold by : </b>{localStorage.getItem("owner")}</p>
              <div>
                {/* <Link to="/cart"> */}
                  <button onClick={handleSubmit} type="button" class="btn btn-success">
                    <b>ADD TO CART</b>
                  </button>
                {/* </Link> */}
              </div>
                
              <div>
                <Ratings></Ratings>
              </div>
            </div>
          </div>
       
      </div>
        <div style={{ marginTop: '5%' }}>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Details;
