import React from "react";
import './Account_Overview.css';
import { FiEdit } from "react-icons/fi";
import {BsFillArrowRightSquareFill} from "react-icons/bs"

import { useTranslation } from "react-i18next";

  const Account_Overview= () => {

      const { t, i18n } = useTranslation();
  



  return (
    <>
   
     
          
            <p className="account_h1 p-2">{t("328.label")}</p>
            <div className="account_details">
            <h4 className="text_h4">{t("329.label")}</h4>
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
            <a href="#" className="">{t("330.label")} </a>
            </div>
            </div>

            <div>

            <h5 className="p-3 m-1 text_hh5">{t("331.label")}</h5>
            <p className="account_parag">
            {t("332.label")}
            </p>
             
            
             <div className="pt-5 account_arrow">
                <BsFillArrowRightSquareFill className="arrow" size={40} />
                <a href="#" className="text-browse">{t("333.label")}</a>
                </div>
             
              
            </div>
        
       
      
    </>
  );
}
export default Account_Overview;