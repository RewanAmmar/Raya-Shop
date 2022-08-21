import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
import resources from "./i18n";
// import translationEN from "../local/translationEN.json"
// import translationAR from "../local/translationAR.json";
const LanguageSelector = () => {
//  const currentResourceCode = cookie.get ("i18next") ||"en"
//  const currentResource = resources.find(l => l.code === currentResourceCode)
  const { t, i18n , dir, language  } = useTranslation();
  // const { } = useTranslation();

  const changeLanguage = (event) => {

    i18n.changeLanguage(event.target.value);
  }
  // const changeLanguage = lnName => {
  //   i18n.changeLanguage(lnName);
  
  // };
 
 
//  useEffect(() =>{
//  document.body.dir = currentResource.dir || "ltr"
//  } , [])
 


  return (

    <div onChange={changeLanguage}>

      <input type="radio" value="en" name="language" defaultChecked />English 
   

<input type="radio" value="ar" name="language" />Arabic

</div>

);

};


export default LanguageSelector;