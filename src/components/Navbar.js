import React from "react";
import   './Navbar.css';

export const Navbar = () =>
{
   
     return(
          <div className= "navbar">
             <ul>
               <li><a href="#beverages">Beverages</a></li>
               <li><a href="#bulk">Bulk</a></li>
               <li><a href="#groceries">Groceries</a></li>
               <li><a href="#HealthBeauty">Health & Beauty</a></li>
               <li><a href="#households">Household</a></li>
               <li><a href="#vitaminssupplements">Vitamins & Supplements</a></li>
               <li><a href="#beverages">Brands</a></li>
             </ul>
          </div>
        
     )
}