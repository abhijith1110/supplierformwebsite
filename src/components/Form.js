import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import './Form.css';
export const  Form =()=>
{
  

  return(
    <div class = "form-main">
    <h1>Become a supplier</h1><br/>
    <p>Unlocking opportunities to showcase your products</p><hr></hr>
    <p class="p1">Interested in Working with Company?Please fill out the form below</p>
    <div class="form-left">
    <form action = "#action">
       <label>First Name*</label><br/>
       <input type="text" class = "txtbox1"></input><br/><br/>
       <label>Last Name*</label><br></br>
       <input type = "text" class = "txtbox2"></input><br></br><br></br>
       <label>Email*</label><br></br>
       <input type = "text" class = "txtbox3"></input><br></br><br></br>
       <label>Phone Number*</label><br></br>
       <input type = "text" class = "txtbox4"></input><br></br><br></br>
       <label>Company Legal Name</label><br></br>
       <input type = "text" class = "txtbox5"></input><br></br><br></br>
       <label>Brand</label><br></br>
       <input type = "text" class = "txtbox6"></input><br></br><br></br>
       <label>Website Url</label><br></br>
       <input type = "text" class = "txtbox7"></input><br></br><br></br>
       <label>Number of SKU's available</label><br></br>
       <input type = "text" class = "txtbox8"></input><br></br><br></br>
       <label>Current Distributors</label><br></br>
       <input type = "text" class = "txtbox9"></input><br></br><br></br>
       

      <p class="p1">Company is an eCommerce extension of company that serves small to medium size businesses with <br></br> no minimum order or frequency requirements.To learn more about Company visit <a href="#">https://<br></br>www.company.com</a></p>
       <div class = "links">
       <p><a href="#privacy">Privacy Policy! </a> </p><br></br>
       <p><a href="#terms"> Terms of Use </a></p><br></br>
       </div>
       <button type="button" class="btn-1 btn-sm">Submit</button>
    </form>
    </div>
    <div class = "form-right">
       <form action =  "#action">
              <label>Distribution Capabality</label><br></br>
              <input type = "radio" id= "gbl"  name = "Global" value = "Global"></input>
              <label for ="gbl">   Global</label><br></br>
              <input type = "radio" id="ntnl" name = "National" value = "National"></input>
              <label for = "ntnl">National</label><br></br>
              <input type = "radio" id= "state" name = "State" value = "State"></input>
              <label for = "state">State (please Specify)</label>
              <label for = "states">Select a State:</label>
               <select name = "states" id="States">
                  <option value = "kerala">--Select State--</option>
                  <option value = "TamilNadu">Tamil Nadu</option>
                  <option value = "Punjab">Punjab</option>
               </select><br></br><br></br>

               <label>Are you able to dropship your products?</label><br></br>
               <input type = "radio" id = "ys1" name = "Yes" value = "Yes"></input>
               <label for = "ys1">Yes</label><br/>
               <input type = "radio" id= "no1" name = "No" value = "No"></input>
               <label for  ="no1">No</label><br/><br></br>
               <label>Do you currently sell your products online?</label>
               <input type ="radio" id = "y1" name = "Yes" value = "Yes"></input> 
               <label for = "y1">Yes</label><br></br>
               <input type = "radio" id = "n1" name = "No" value = "No"></input>
               <label for = "n1">No</label><br></br><br></br>
            <div class = "check1">

            <label>Are you a diverse supplier?(Check all that apply)</label><br></br>
               
               <input type ="checkbox" id = "MO" name = "Minority Owned" value = "MO">
               </input>
               <label for = "MO">Minority Owned</label><br></br>
               <input type ="checkbox" id = "WO" name = "Women Owned" value = "MO">
               </input>
               <label for = "MO">Women Owned</label><br></br>
               <input type ="checkbox" id = "LGBTO" name = "LGBTO Owned" value = "MO">
               </input>
               <label for = "LTGO">LGBTO Owned</label><br></br>
               <input type ="checkbox" id = "MO" name = "Other" value = "MO">
               </input>
               <label for = "MO">Other</label><br></br>
               <input type ="checkbox" id = "MO" name = "Minority Owned" value = "MO">
               </input>
               <label for = "MO">Veteran Owned</label><br></br>
               <input type ="checkbox" id = "MO" name = "Minority Owned" value = "MO">
               </input>
               <label for = "MO">Sevice Disable</label><br></br>
               <input type ="checkbox" id = "MO" name = "Minority Owned" value = "MO">
               </input>
               <label for = "MO">Prefer Not to Answer</label><br></br>
               <input type ="checkbox" id = "MO" name = "Minority Owned" value = "MO">
               </input>
               <label for = "MO">Not Applicable</label><br></br><br></br>
                <textarea id = "txt1" name = "txt1" rows = "3" cols = "50">
                    Enter Commands Here
                </textarea> <br></br>

                <label>Do you have current product attribute Certifications?(Check all that apply)</label><br></br>
                <input type = "checkBox" id = "USD" name = "USDA Organic" value = "USD"></input>
                <label for = "USD">USDA Organic</label><br></br>
                <input type = "checkBox" id = "Kosher" name = "Kosher" value = "kos"></input> 
                <label for = "Kosher">Kosher</label><br></br>
                <input type = "checkBox" id = "NG" name = "Non-GMO" value = "Non-GMO"></input>
                <label for = "NG">Non-GMO</label><br></br>
                 <input type = "checkbox" id = "FT" name = "Fair Trade" value = "FT"></input>
                 <label for = "FT">Fair Trade</label><br></br>
                 <input type = "checkBox" id= "NA" name = "Not-Applicable" value = "NA"></input>
                 <label for = "NA">Not Applicable</label><br></br><br></br>
                 <p>Please upload a spreadsheet with your product information,including product description,<br></br>UPC,Pack Size,Unit Size,Category,Cold Storage,Type,Country of Orgin,State of Orgin and SRP</p>
                 <p>File must be in .xls or .csv format</p><br></br>
                 <button type="button" class="btn btn-outline-success">Choose File</button><br></br><br></br>
                 <a class="a1" href="#download">Download template</a>
             </div>
          </form>
    </div>
    
 </div>
    
  )
  
      
    
    
}

       
           
      
          

   
