import React, { Component } from 'react';
import imh from './images/3765.jpg'
import ToolSlider from './toolscard';
import PlantSlider from './plant';
import {Link} from 'react-router-dom';

const Organic = ()=>
{
    return(
        <div>
            {/* <PlantSlider></PlantSlider> */}
            <Link to='/organic'>
            <img style={{margin:'1%',borderRadius:'7px',width:'98%',height:'70vh'}} src={imh}></img>
            </Link>
            
        </div>
    )
}

export default Organic;