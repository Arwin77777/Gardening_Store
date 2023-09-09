import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from './images/sunflower.jpeg';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PlantSlider = () => {
  const[cardData,setCardData] = useState([]);
  var a = "";
  useEffect(()=>
  {

  },[]);
  axios.get('http://localhost:8181/api/v1/auth/getplants')
  .then(response=>{
    setCardData(response.data);
  })
  .catch(error=>
    {
      console.log(error);
    }); 
    const cardsPerFrame = 4;

  const cardChunks = [];
  for (let i = 0; i < cardData.length; i += cardsPerFrame) {
    cardChunks.push(cardData.slice(i, i + cardsPerFrame));
  }
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
    localStorage.setItem("owner",cardDetails.seller["company_name"]);
    // <Details></Details>
    navigate('/details');
  }

  return (
    <div className='slide' style={{border:'0px solid white',backgroundColor:'white',margin:'1%',padding:'1%',marginTop:'2%',boxShadow:'0.5px 0.5px 2px 0.5px rgb(233,230,230)',borderRadius:'5px'}}> 
      <Link to='/plants' style={{textDecoration:'none'}}><h4 style={{marginTop:'3%',marginLeft:'1%',color:'green'}}>Plants</h4></Link>
    <Carousel className='slide' interval={null} style={{margin:'1%',cursor:'pointer'}}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item  key={index} > 
          <div className="row">
            {chunk.map((card) => (
              <div onClick={()=>handleDetails(card)}  className="col-md-3" key={card.product_id}>
                <Link  style={{textDecoration:'none' , color:'black'}} to='/details'>
                <div className="card" style={{width:'100%',textDecoration:'none '}}>
                  <img style={{width:'100%',height:'190px'}} src={tomato}  className="card-img-top" alt="Card" />
                  <div className="card-body" style={{padding:'25px'}}>
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.description}</p>
                    <b>${card.price}</b>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default PlantSlider;
