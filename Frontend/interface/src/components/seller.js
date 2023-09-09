import React, { Component, useState } from 'react';
import './add.css';
import { SimpleDropdown } from 'react-js-dropdavn'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Home/Nav';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Sell = ()=>
{
    const[company_name,setCompany_name] = useState('');
    const[phone_number,setPhone_number] = useState('');
    const[address,setAddress] = useState('');
   
    const handleSubmit = async(e) =>
    {
      e.preventDefault();
      
      try {
        const tok = localStorage.getItem('token');
        console.log(tok);
        console.log("first");
        const response = await axios.post('http://localhost:8181/api/v1/auth/addseller', {company_name,phone_number,address}, {
          headers: {
            Authorization: `Bearer ${tok}`
          }
        });
        console.log("Response:", response);
        alert("You are a Seller now");
        
      } catch (error) {
        console.error("Error:", error);
      }

    }

    return(
      <div>
          <Nav></Nav>
        <div  className='add-product'>
           <form className='add-form' onSubmit={handleSubmit}>
            <h4 className='add-header'>Be a Seller</h4>
      <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Company name"
    value={company_name} 
    onChange={(e) =>setCompany_name(e.target.value)}
    />

  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone number"
    value={phone_number}
    onChange={(e)=>setPhone_number(e.target.value)}/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address"
    value={address}
    onChange={(e)=>setAddress(e.target.value)}/>
  </div>
 
  <button   type="submit" class="btn btn-success">Submit</button>
</form>
  <Link to='/sell'>Sell your Products</Link>
</div>
</div>
    )
}

export default Sell;