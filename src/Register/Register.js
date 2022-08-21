import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
import { useHistory } from 'react-router-dom'

import { useTranslation } from "react-i18next";

const Register= () => {

    const { t, i18n } = useTranslation();

  return (
    <>
    {/* <InternalHeader/> */}
    <InternalHeader/>
     <div className='register'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><Link to='/login'> {t("174.label")}</Link></div>
            <div className='content '>
             
                <div className='rightRigister'>
                  <h1>{t("163.label")} </h1>
                  <h2>{t("164.label")}</h2>
                  <form >
                    <input type="text" className='form-control' required placeholder={t("168.label")}
                    />
                    
                    <input type="text" required className='form-control' placeholder={t("169.label")}
                   />
                    
                    <input type="number" required className='form-control' placeholder={t("170.label")}
                   />
                  
                    <input type="password" required className='form-control' placeholder={t("171.label")}
                    />
                  
                    
                    <button className='btn button2Register'>{t("163.label")}</button>
                  </form>
                </div>
                <div className='left'>
                  <div className='imgbg d-flex'>
                    <h1>{t("165.label")}</h1>
                    <p>{t("166.label")}</p>
                    <Link to="/login"><button  className='btn btn-light border-2 button1'>{t("167.label")}</button></Link>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerRegister'>
              <p>{t("172.label")}<a href=''>{t("173.label")}</a></p>
                
            </footer>
            </>
  )
}
export default Register;