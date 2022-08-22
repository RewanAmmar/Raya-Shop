import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Home from './Home/home';
import Layout from './Layout/Layout';
import Navbar from './Navbar/navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Cart from './Cart/Cart';
import PayInstallment from './PayInstallment/PayInstallment';
import StoreLocator from './StoreLocator/StoreLocator';
import Footer from './Footer/Footer';
import Product_Details from './Product_Details/Product_Details';
import { SearchProvider } from './Shared/Contexts/SearchProvider';
import { getCategory } from './Shared/Firebase/Products_Functions';
import React, { Component, Suspense ,useEffect , useState} from "react";
import "./App.css";
import "./localize/i18n";
// import Introduction from './localize/Introduction';
import Advantages from "./localize/Advantages"
import LanguageSelector from "./localize/LanguageSelector";


function App() {


  const [searchQuery, setSearchQuery] = useState("")


  return (

    <div>

      <Router>
        <SearchProvider value={{ searchQuery, setSearchQuery }}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/Mobiles&Tablets' exact component={Layout} />
            <Route path='/KitchenAppliances' exact component={Layout} />
            <Route path='/LargeAppliances' exact component={Layout} />
            <Route path='/Health&Beauty' exact component={Layout} />
            <Route path='/SmallAppliances' exact component={Layout} />
            <Route path='/Televisions' exact component={Layout} />
            <Route path='/Electronics' exact component={Layout} />
            <Route path='/Laptops&PCs' exact component={Layout} />
            <Route path='/Vehicles' exact component={Layout} />
            <Route path='/Details/:prdId' exact component={Product_Details} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/payInstallment' exact component={PayInstallment} />
            <Route path='/storeLocator' exact component={StoreLocator} />
          </Switch>
          <Footer />
        </SearchProvider>

      </Router>




    </div>
  );
}

export default App;


 