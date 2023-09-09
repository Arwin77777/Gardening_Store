import React, { Component } from 'react';
import Nav from './Home/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tomato from './images/tomato.jpeg';
import { Link } from 'react-router-dom';
import Organic from './organic';
const OrganicPage = ()=>
{
    return (
        <div>
             <div>
            <Nav></Nav>
            <div>
            
    <div className='card-1'>
      <h3 className='card-header'>Organic Products</h3>  
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
            <Link style={{textDecoration:'none',color:'black'}} to='/details'>
          <Card style={{cursor:'pointer'}}>
            <Card.Img  style={{width:'100%',height:'190px'}} variant="top" src={tomato} />
            <Card.Body>
              <Card.Title style={{marginLeft:'35%'}}>Tomato</Card.Title>
              <Card.Text style={{marginLeft:'40%'}}>
                <b>Rs.100</b>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </div>
    </div>    
            </div>
        </div>
    )
}

export default OrganicPage;