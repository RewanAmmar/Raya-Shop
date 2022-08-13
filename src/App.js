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




function App() {

  return (
    
    <div>
     
      <Router>
      <Navbar/>
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
