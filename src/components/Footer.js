import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>ABOUT</h2>
          <div className="content">
            <ul>
              <li>About Company</li>
              <li>Become a Supplier</li>
              <li>Careers</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <div className="second box">
          <h2>SHOP</h2>

          <ul>
            <li>Bulk</li> <br />
            <li>Groceries</li>
            <li>Health and beauty</li>
            <li>Households</li>
            <li>Vitamins and minerals</li>
          </ul>
        </div>
        <div className="third box">
          <h2>CUSTOMER CARE</h2>
          <ul>
            <li>FAQs</li>
            <li>Shipping and Delievery</li>
            <li>Claims and Returns</li>
            <li>Contact Us</li>
            <li>Create New Account</li>
          </ul>
        </div>
        <div className="right box">
          <h2>SIGN UP FOR EMAIL</h2>
          <br></br>
          <p>
            Be the first to hear about promotions,new products,<br></br>
            trends,and more.
          </p>
          <br></br>
          <input type="text" placeholder="Email Address"></input>
          <button class="button1">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};
