import React from "react";
import './Menu.css';

export const Menu = () =>
{
     return(
         <div className = "menu">
             <ul>
               <li className = "lis1"><a href="#Home">Home</a></li>
               <i class="fa fa-angle-right"></i>
               <li className = "lis2"><a href="#BSP">Become a Supplier</a></li>
             </ul>
         </div>
     )
}