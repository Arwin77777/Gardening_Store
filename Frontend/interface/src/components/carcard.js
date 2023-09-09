import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from './images/fitness.jpeg';
import carrot from './images/carrot.jpeg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Slider = () => {
  const[cardData,setCardData] = useState([]);
  var a = "";
  useEffect(()=>
  {

  },[]);
  axios.get('http://localhost:8181/api/v1/auth/getgrocery')
  .then(response=>{
    setCardData(response.data);
  })
  .catch(error=>
    {
      console.log(error);
    }); 

  const cardsPerFrame = 4; // Number of cards to display in a single frame

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
    <div keyboard={true}  style={{border:'0px solid white',backgroundColor:'white',margin:'1%',padding:'1%',boxShadow:'0.5px 0.5px 2px 0.5px rgb(233,230,230)',marginTop:'2%',borderRadius:'5px'}} className='slide'> 
      <Link to='/grocery' style={{textDecoration:'none'}}><h4 style={{marginTop:'2%',marginLeft:'1%',color:'green'}}>Grocery</h4></Link>
    <Carousel className='slide' interval={null} style={{margin:'1%',cursor:'pointer'}}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item key={index} >
          <div  className="row">
            {chunk.map((card) => (
              <div onClick={()=>handleDetails(card)}  className="col-md-3" key={card.id}>
                <Link style={{textDecoration:'none' , color:'black'}} to='/details'>
                <div className="card" style={{width:'100%'}}>
                 <div > <img src={tomato} style={{width:'100%',height:'230px'}} className="card-img-top" alt="Card" /></div>
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.description}</p>
                    <b style={{color:'green'}}>${card.price}</b>
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

export default Slider;
