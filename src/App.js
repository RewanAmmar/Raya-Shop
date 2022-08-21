import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/home';
import Layout from './Layout/Layout';
import Navbar from './Navbar/navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Cart from './Cart/Cart';
import PayInstallment from './PayInstallment/PayInstallment';
import StoreLocator from './StoreLocator/StoreLocator';

import React, { Component, Suspense ,useEffect} from "react";
import cookie from "js-cookie";
import "./App.css";

import "./localize/i18n";


// import Introduction from './localize/Introduction';
import Advantages from "./localize/Advantages"
import LanguageSelector from "./localize/LanguageSelector";
import Side_Account from './Side_Account/Side_Account';
import Wishlist from './My Wishlist/Wishlist';
import Account_Overview from './Account_Overview/Account_Overview';
import Account_Setting from './Account_Setting/Account_Setting';
import Address_Book from './address book/Address_Book';
import Slider from 'react-slick/lib/slider';
import Product_Card from './Shared/Product_Card/Product_Card';
import Product_Component from './Shared/Product_Component/Product_Component';
import Product_Details from './Product_Details/Product_Details';


function App() {

    
  return (
   
    <div>
      <Suspense fallback={null}>

<LanguageSelector />
{/* <Introduction /> */}

<Advantages />
</Suspense>
      <Router>
        <Route path="/Mobiles&Tablets" exact component={Layout} />
        <Route path="/Televisions" exact component={Layout} />
      <Navbar/>
      {/* <Side_Account/> */}
      {/* <Wishlist/> */}
      {/* <Cart/> */}
      {/* <Slider/> */}
      {/* <Account_Overview/> */}
      {/* <Account_Setting/> */}
      {/* <Address_Book/> */}
     {/* <Product_Component/> */}
     <Wishlist/>
     <Product_Details/>
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/payInstallment" exact component={PayInstallment}/>
        <Route path="/storeLocator" exact component={StoreLocator}/>    
      </Switch>      
    
    
      </Router>


      

    </div>
  );
}

export default App;
