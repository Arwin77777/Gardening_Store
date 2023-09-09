import React, { useState } from 'react';
import './feedback.css'; 
import Navbar from './Home/Nav'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here, for example, send data to the server or perform other actions
    try {
        const tok = localStorage.getItem('token');
        console.log(tok);
        console.log("first");
        const response = await axios.post('http://localhost:8081/post', formData, {
          headers: {
            Authorization: `Bearer ${tok}`
          }
        });
        console.log("Response:", response);
        alert("Thanks for your feedback");
        navigate('/home');
      } catch (error) {
        console.error("Error:", error);
      }

    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="rev-container">
      <h2>Leave Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="rev-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
       
        <div className="rev-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="rev-group">
          <input type="submit"/>
        </div>
      </form>
    </div>
    </>
  );
};

export default Feedback;