import React, { Component, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './nav.css'
import {NavLink,Link} from 'react-router-dom';
import im from '../images/leaf211-removebg-preview.png';
import {useSelector} from 'react-redux';
import { selectUser } from '../feature/user';
import axios from 'axios';


const Nav = ()=>
{
    // const user =useSelector(selectUser);
    const [uname,setUname] = useState('');
    const user =useSelector(state => state.user.value)
    const [name,setName] = useState('');
    localStorage.setItem("sname",name);
    useEffect(()=>
    {
        const tok = localStorage.getItem("token");
        axios.get('http://localhost:8181/api/v1/auth/getname',{
        headers:{
            Authorization:`Bearer ${tok}`,
        },
    })
        .then(response=>
            {
                setUname(response.data);
                console.log(response.data);
            })
            .catch(error=>
                {
                    console.log(error);
                })
    },[])
    return(
        <div className='navbar'>
          
                {/* <img className='im' src={im}></img> */}
                <NavLink to='/home' className='name'><h4>Urban Eden</h4></NavLink>
            {/* <ul>
                <NavLink to="/plants"> <li>Plants</li></NavLink>
                <NavLink to="/decor"><li>Garden Decor</li></NavLink>
                <NavLink to="/tools"><li>Tools</li></NavLink> 
                <NavLink to="/grocery"><li>Grocery</li></NavLink>    
            </ul> */}
            <div className='search'>
            <input  type='text' className='searchbar' value={name} onChange={(e)=>setName(e.target.value)} name='search' placeholder='Search'></input>
         <Link to='/sea'> <button className='s-bt'><i class="bi bi-search "></i></button></Link>
            </div>
           <NavLink to='/profile'  className='per'><i class="bi bi-person-fill ac-ic"></i></NavLink>
    
            
           <h5 style={{color:'black',marginTop:'10px',marginLeft:'5px'}} className='icons-link'>{uname}</h5>
            <NavLink to='/cart' className='icons-link'><i class="bi bi-cart cart-im"></i></NavLink>
            <NavLink to='/wishlist' className='icons-link'><i class="bi bi-heart wishlist-im"></i> </NavLink>
            <NavLink to='/seller' className='sell-p'>Sell your product</NavLink>
        </div>
    )
}

export default Nav;