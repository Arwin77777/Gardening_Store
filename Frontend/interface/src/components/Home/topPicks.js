import React, { Component } from 'react';
import './topPicks.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from '../images/tp1.jpg';
import bg from '../images/background.jpg';
import or from '../images/tp.jpg'

function TopPicks() {
  const images = [tomato,bg,or];
  var i =0;
  return (
    <Carousel keyboard={true} style={{marginTop:'1%',color:'black',padding:'1%'}}>
      <Carousel.Item style={{height:'20%'}}>
        <img
        style={{height:'400px'}}
        className="d-block w-100"
          src={tomato}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>5% OFFER</h3>
          <p>Top Picks</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
        <img
            style={{height:'400px'}}
          className="d-block w-100"
          src={or}
          alt="Second slide"
        />
      

        <Carousel.Caption>
          <h3>Organic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'400px'}}
          className="d-block w-100"
          src={bg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fresh veggies</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TopPicks;