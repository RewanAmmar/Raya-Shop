import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import cookies from "js-cookie";
const LanguageSelector = () => {
  // const currentLanguageCode = cookies.get('i18next') || 'en'
  // const currentLanguage= resources.find(l => l.code === currentLanguageCode )
 const { t, i18n } = useTranslation();
 

  const changeLanguage = (event) => {

    i18n.changeLanguage(event.target.value);
  }
 
//  const languages= [
//   {
//     code: 'ar',
//     name:'العربية',
//    dir:'rtl',
//   },
//   {
//     code: 'en',
//     name:'English',
    
//   }
//  ]
// useEffect(() =>{
// document.body.dir = currentLanguage.dir || 'ltr'
// },[currentLanguage])


  return (

    <div onChange={changeLanguage}>

      <input type="radio" value="en" name="language" defaultChecked />English 
   

<input type="radio" value="ar" name="language" />Arabic

</div>

);

};


export default LanguageSelector;