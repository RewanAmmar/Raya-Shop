import React from "react";
import './Account_Overview.css';
import { FiEdit } from "react-icons/fi";
import {BsFillArrowRightSquareFill} from "react-icons/bs"



export default function Account_Overview() {
  return (
    <>
   
     
          
            <p className="account_h1 p-2">ACCOUNT OVERVIEW</p>
            <div className="account_details">
            <h4 className="text_h4">presonal Details</h4>
            <div class="row g-3 pt-3 account_form">
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                readOnly
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  readOnly
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                readOnly
                />
              </div>
            </div>
            <div className="d-inline-flex edit_text">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">Edit Account </a>
            </div>
            </div>

            <div>

            <h5 className="p-3 m-1 text_hh5">Latest Order</h5>
            <p className="account_parag">
              You haven’t ordered any products from Raya yet, browse products
              now, checkout in a few steps<br/> and have your orders saved in your
              profile
            </p>
             
            
             <div className="pt-5 account_arrow">
                <BsFillArrowRightSquareFill className="arrow" size={40} />
                <a href="#" className="text-browse"> Browse Products</a>
                </div>
             
              
            </div>
        
       
      
    </>
  );
}
