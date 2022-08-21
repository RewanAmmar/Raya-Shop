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
import { useState } from 'react';
import Product_Details from './Product_Details/Product_Details';
import { ProductByCatProvider } from './Shared/Contexts/ProductByCatProvider';
import { getCategory } from './Shared/Firebase/Products_Functions';
import { useEffect } from 'react';



function App() {

  const [productObj, setProductObj] = useState({})


  return (

    <div>

      <Router>
        <ProductByCatProvider value={{ productObj, setProductObj }}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/Mobiles&Tablets' exact component={Layout} />
            <Route path='/Televisions' exact component={Layout} />
            <Route path='/Details/:prdId' exact component={Product_Details} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/payInstallment' exact component={PayInstallment} />
            <Route path='/storeLocator' exact component={StoreLocator} />
          </Switch>
          <Footer />
        </ProductByCatProvider>
      </Router>




    </div>
  );
}

export default App;
