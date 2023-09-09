import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Nav from './Home/Nav';
import tomato from './images/tomato.jpeg';
import carrot from './images/carrot.jpeg';
import Footer from  './footer';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Wishlist = ({ onRemove, onIncrease, onDecrease }) => {
  const [cartItems, setCartItems] = useState([]);
  const [sum,setSum] = useState('');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const token = localStorage.getItem('token');
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/v1/auth/getcart',{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
      )
      // Replace '16' with the user_id of the logged-in user
      setCartItems(response.data);
      console.log(response.data);
      // console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8181/api/v1/auth/deleteitem/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      )
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * 1, 0);
  const total_amount= total;
  const handleCheckout = async(e)=>
  {
    e.preventDefault();
    try
    {
      const token = localStorage.getItem('token');
      console.log(token);
      console.log(total_amount);
      const response = await axios.post('http://localhost:8181/api/v1/auth/order',{total_amount},
      {
        headers:
        {
          Authorization:`Bearer ${token}`
        }
      });

      console.log(response);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  return (

    

    <div>
        <Nav></Nav>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <Row style={{margin:'2%'}} key={item.id}>
          <Col xs={12} md={4}>
            <Card.Img src={item.image_url} />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text style={{color:'gray'}}>{item.category}</Card.Text>
              <Card.Text>Description: {item.description}</Card.Text>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
              <Button variant="success" onClick={() => onIncrease(item.product_id)}>
                +
              </Button>{' '}
              <Button variant="danger" onClick={() => onDecrease(item.product_id)}>
                -
              </Button>{' '}
              <Button variant="danger" onClick={() => removeCartItem(item.product_id)}>
                Remove
              </Button>
            </Card.Body>
          </Col>
        </Row>
      ))}
      <h3>Total: ${total}</h3>
      <div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Wishlist;
