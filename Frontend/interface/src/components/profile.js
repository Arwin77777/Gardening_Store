import React, { useState, useEffect } from "react";
import "./profile.css";
import NavBar from "./Home/Nav";
import axios from "axios";
import Footer from "./footer";
import tomato from './images/user.avif'
import { useNavigate } from "react-router-dom";

function Advp() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const tok = localStorage.getItem("token");
    axios
      .get(`http://localhost:8181/api/v1/auth/getuser`, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then(response => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const navigate = useNavigate();
  const handleUpdate = (details) =>
  {
    localStorage.setItem("id",details.id);
    navigate("/update");
  }

  return (
    <>
      <NavBar />
      <div className="bg">
        <div className="container">
          {details ? (
            <div className="profile-details" key={details.id}>
                 <div className="profile-pic">
                <img src={tomato} alt="Profile Picture" />
              </div>
              <div className="profile-item">
                <span className="profile-label">Name:</span>
                <h4>{details.name}</h4>
              </div>
              <div className="profile-item">
                <span className="profile-label">Email:</span>
                <p>{details.email}</p>
              </div>
              <button onClick={()=>handleUpdate(details)} className="random-btn">Update Details</button>
            </div>
          ) : (
            <p>Loading profile details...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Advp;
