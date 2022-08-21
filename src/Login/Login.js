import React from 'react'

import InternalHeader from '../InternalHeader/InternalHeader';
import './Login.css';
import './LoginResposive.css'


  
  import { useTranslation } from "react-i18next";

  const Login= () => {

      const { t, i18n } = useTranslation();
  



  return (<>
  <InternalHeader/>
    <div className='login'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><a href=''> {t("162.label")} </a></div>
            <div className='content '>
                <div className='left'>
                  <div className='imgbg'>
                    <h1>{t("150.label")}</h1>
                    <p>{t("151.label")}</p>
                    <ul>
                      <li>{t("152.label")}</li>
                      <li>{t("153.label")}</li>
                      <li>{t("154.label")}</li>
                    </ul>
                    <button className='btn btn-light border-2 button1' >{t("155.label")}</button>
                  </div>
                </div>
                <div className='rightLogin'>
                  <h1>{t("156.label")}</h1>
                  <h2>{t("157.label")}</h2>
                <form>
                  <input type="text" className='form-control' placeholder='Enter Email'/>
                  {/* <span>This field is required</span> */}
                  <input type="password" className='form-control' placeholder='Enter Password'/>
                  {/* <span>This field is required</span> */}
                  <div className='link'><a href='#'>{t("158.label")}</a></div>
                  <button className='btn btn-primary button2'>{t("159.label")}</button>
                </form>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerLogin'>
              <p>{t("160.label")} <a href=''>{t("161.label")} </a></p>
                
            </footer>
            </>
  )
}
export default  Login;