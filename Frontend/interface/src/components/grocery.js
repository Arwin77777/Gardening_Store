import React, { Component } from 'react';
import Nav from './Home/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tomato from './images/tomato.jpeg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Details from './desc';
const Grocery = ()=>
{
  var a = "";
  const[events,setEvents] = useState([]);
  useEffect(()=>
  {
    const tok = localStorage.getItem('token');
    axios.get('http://localhost:8181/api/v1/auth/getgrocery',{
      headers: {
        Authorization: `Bearer ${tok}`
      }
    })
    .then(response=>{
      setEvents(response.data);
    })
    .catch(error=>
      {
        console.log(error);
      }); 

  },[]);
   
    const navigate = useNavigate();
    const handleDetails = (cardDetails) =>
    {
      localStorage.setItem("category",cardDetails.category);
      localStorage.setItem("description",cardDetails.description);
      localStorage.setItem("image_url",cardDetails.image_url);
      localStorage.setItem("name",cardDetails.name);
      localStorage.setItem("price",cardDetails.price);
      localStorage.setItem("product_id",cardDetails.product_id);
      localStorage.setItem("owner",cardDetails.seller["company_name"]);
      
      <Details cardData={cardDetails}></Details>
      console.log(cardDetails);
      navigate('/details');
    }


    return (
        <div>
             <div>
            <Nav></Nav>
            <div>
            
    <div className='card-1'>
      <h3 className='card-header'>Grocery</h3>  
    <Row xs={1} md={4} className="g-4">
      {events.map(ev => (
        <Col onClick={()=>handleDetails(ev)} key={ev.product_id}>
          {/* <Link to='/details'> */}
          <Card style={{cursor:'pointer'}}>
            <Card.Img style={{width:'100%',height:'190px'}} variant="top" src={tomato} />
            <Card.Body>
              <Card.Title style={{marginLeft:'35%'}}>{ev.name}</Card.Title>
              <Card.Text style={{color:'gray'}}>
                <p>{ev.description}</p>
              </Card.Text>
              <Card.Text style={{marginLeft:'40%'}}>
                <b>${ev.price}</b>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </Link> */}
        </Col>
      ))}
    </Row>
    </div>
    </div>    
            </div>
        </div>
    )
}

export default Grocery;