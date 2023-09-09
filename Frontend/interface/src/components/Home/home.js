import React, { Component } from 'react';
import Nav from './Nav';
import Cards from '../card';
import Slider from '../carcard';
import TopPicks from './topPicks';
import ToolSlider from '../toolscard';
import PlantSlider from '../plant';
import Organic from '../organic';
import DecorSlider from '../decorcard';
import Review from './Review';
import Footer from '../footer';
const Home = ()=>
{
    return(
        <div>
            <Nav></Nav>
            {/* <Cards></Cards> */}
            <TopPicks></TopPicks>
            <Slider ></Slider>
            <ToolSlider></ToolSlider>
            <PlantSlider></PlantSlider>
            <Organic></Organic>
            <DecorSlider></DecorSlider>
            <Review></Review>
            <Footer></Footer>
        </div>
    )
}

export  default Home;