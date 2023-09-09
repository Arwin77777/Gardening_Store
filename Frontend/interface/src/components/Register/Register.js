import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import './Register.css'
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
const Register = ({setUserState}) => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "First Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }

    
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:8181/api/v1/auth/register", user).then((res) => {
        // console.log("hi");
        // alert(res.data.user);
        // setUserState(res.data.user);
        navigate("/", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <>
      <div className="register">
        <form>
          <h1>Sign Up</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.name}
          />
          <p className={basestyle.error}>{formErrors.name}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className={basestyle.error}>{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />

<p className={basestyle.error}>{formErrors.cpassword}</p>
          <NavLink to="/home"><button style={{width:'200px' , height:'60px'}} className="button_common" onClick={signupHandler}>
            Register
          </button></NavLink>
          <div style={{display:'flex',marginTop:'3%',marginLeft:'25%'}}><p>Already registered?</p> <NavLink style={{ textDecoration: 'none' }} to="/"> Login</NavLink></div>
       
        </form>
      </div>
    </>
  );
};
export default Register;

