import React, { Component } from 'react';
import './footer.css'

const Footer = ()=>
{
    return (
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">Our mission is to make it convenient and accessible for everyone to shop for high-quality organic products without compromising on taste or the environment. We have carefully curated a range of organic fruits, vegetables, grains, dairy products, snacks, and more, sourced from trusted farmers and suppliers who share our commitment to sustainable agriculture and ethical practices.</p>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">Organic products</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Grocery</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Plants</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Tools</a></li>
                <li><a href="http://scanfcode.com/category/android/">Decors</a></li>

              </ul>
            </div>
  
           
          </div>
          <hr></hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
           <a href="#">Urban eden</a>.
              </p>
            </div>
  
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>    
    )
}

export default Footer;