import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tomato from './images/tomato.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Nav from './Home/Nav';

function Cards() {
  
  return (

<div><Nav></Nav>  
    <div className='card-1'>
      <h3 className='card-header'>Grocery</h3> 
    <Row xs={1} md={4} className="g-4">
    
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
        
          <Card style={{cursor:'pointer',marginRight:'10px'}}>

            <Card.Img variant="top" src={tomato} />
        
            <Card.Body>
              <Card.Title style={{marginLeft:'35%'}}>Tomato</Card.Title>
              {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
         
          </Card>
         
        </Col>
      ))}
 
    </Row>
    </div>
    
    </div>    
  );
}

export default Cards;