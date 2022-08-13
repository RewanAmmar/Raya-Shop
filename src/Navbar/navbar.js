import React, { Component, useState } from "react";
import TVsList from "../Menu/TVsList";
import MobList from '../Menu/MobList'
import './nav.css'
import SmallList from "../Menu/SmallList";
import LargeList from "../Menu/LargeList";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { CgCloseR } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    visible: true,
    whichComponentToShow: 'Nav'
  };

  render() {

    const moveData = (data) => {
      this.setState({ whichComponentToShow: `${data}` })
    }

    if (this.state.whichComponentToShow === 'Nav') {

      return (
        <div>

 <div className='row'>
  <div className='navbar navbar-expand-lg'>
    <div className='container'>
 <button onClick={() => {
              this.setState({ whichComponentToShow: 'Secnav' });

            }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon "onClick={() => {
      this.setState({ whichComponentToShow: 'Nav' });

    }}></span>
</button> 
<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='upperheader HeaderLine mx-3'>
        <div className='oneLeft pt-2'>
          <p className='txt'>The Easiest and Fastest instalment system.</p>
        </div>

        <div className='oneRight'>
          <ul  className='oneul'>
          <Link to="/payInstallment"><li className='oneli'><a className='onea mx-5' href='#'> <BsWallet2 size={18}/>  Pay Installment</a></li></Link>  
            <li className='oneli'><a className='onea mx-2' href='#'> <FiPhoneCall size={18}/>  Call 19900</a></li>
            <Link to="/storeLocator"><li className='oneli'><a className='onea mx-5' href='#'> <TbBuildingStore size={18}/>  Store Locator</a></li></Link>
            <li className='oneli'><a className='onea' href='#'><TbWorld size={18}/>  العربية</a></li>
          </ul>
      </div>
      </div>
      </div>
      </div>
    </div> 
<div className='navbar-header '>
<div className="container">
<div className="row">
          <div className='col-6 col-xl-2  order-xl-1 order-1 '>
           <Link to="/"> <img className='Logo' src={require("../assets/Logo.jpg")} />  </Link>
          </div>
          
        <div className="searchinput col-12   col-xl-6  order-xl-2 order-3">
             <BiSearchAlt size={30} className="iccon" />
              
              <input className='inputs' id="address_form"
           type="text" aria-describedby="searchHelp" placeholder='Search Product' />
            </div>
          <div className=' col-6 d-flex justify-content-end  col-xl-4  order-xl-3 order-2 mr-5 pr-5 pt-3 '>
            <Link to="/register"><a className='Login me-4' href='#'>Login or Register</a></Link>
            
            <a className='sss text-light ms-4 me-3' href='#'> <BsCart2 size={25}/> </a>
        </div>
     </div>
    </div>
    </div>
     
    <div className='secnav ps-5  align-items-center'>
 <div class="navbarr">
  
<a  className='nava' href="#home">
<span className='hot'>
<img className='off' src={require("../assets/offer.webp")}/> 
HotDeals</span>
</a>
<div className="subnav">
<button class="subnavbtn">Mobiles&Tablets</button>

<div className=" subnav-content">

<div className='row d-flex  gx-0  '>
<div className='row'>
<div className='col-8 ps-5 '>

<a  className=" subnava" href="#company"><h4 className='maiin'>Mobiles</h4>
<ul className='sub2nav ms-4'>
<li className='sub2navli'>Mobile Apple</li>
<li className='sub2navli'>Mobile Samsung</li>
<li className='sub2navli'>Mobile Xiaomi</li>
<li className='sub2navli'>Mobile Oppo</li>
<li className='sub2navli'>Mobile Realme</li>
<li className='sub2navli'>Alcatel Phone</li>
</ul>
</a>
<a  className=" subnava" href="#team"><h4 className='maiin'>Mobile Accessories</h4>
<ul className='sub2nav'>
<li  className='sub2navli'>Power Banks</li>
<li  className='sub2navli'> Chargers & Adapters</li>
<li  className='sub2navli'>Charging Cables</li>
<li  className='sub2navli'> Headphones & Headsets</li>
<li className='sub2navli'>Screen Protectors</li>
<li  className='sub2navli'> Speakers</li>
<li  className='sub2navli'>Smart Watches Accessories</li>
<li  className='sub2navli'> Smart Watches</li>
<li  className='sub2navli'>Memory Cards</li>
<li  className='sub2navli'> Mobile Cases & Covers</li>
</ul>
</a>
<a  className="subnava" href="#caree"> <h4  className='maiin ps-5'>Tablets</h4></a>
<a className="subnava" href="#cares"><h4 className='maiin ps-5'>Feature Phones</h4></a></div>
<div className='col-4'>
<div className='mobtext'>
<h5 className='deal'>Great Deals</h5>
<p className='sale'>Meet Your deals and Enjoy cash and installment offers with best deals</p>
</div>
</div>
</div>

<div className='row'>
<div className='col-md-6'>
<img src={require("../assets/oppo.webp")} /> 
<img src={require("../assets/apple.webp")} /> 
<img src={require("../assets/5.webp")} /> 
<img src={require("../assets/sam.webp")} /> 
</div>
</div>
<div>
  <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='foottxt'> Shop All Mobiles & Tablets</span>
    </a>
</div>      

</div> 
</div></div>
<div class="subnav">
<button class="subnavbtn">Television </button>
<div class="subnav-content">
<div className='row d-flex gx-0'>
<div className='row'>
<div className='col-md-8 '>
<a className=" subnava" href="#bring"><h4 className='maiin ms-4'>TVs</h4>
<ul className='sub2nav ms-4'>
<li  className='sub2navli'>Samsung TV</li>
<li className='sub2navli'>LG</li>
<li className='sub2navli'>Toshiba TV</li>
<li className='sub2navli'>Sony TV</li>
<li className='sub2navli'>SARY TV</li>
</ul>
</a>
<a  className=" subnava" href="#deliver"><h4  className='maiin'>TV Accessories</h4></a>
<a className=" subnava" href="#package"><h4 className='maiin ps-3'>Receivers</h4></a>
<a  className=" subnava" href="#express"><h4 className='maiin ps-3'>Home Theaters</h4></a>
</div>
<div className='col-md-4'>
<div className='tvtext'>
<h5 className='deal'>Great Deals</h5>
<p className='sale'>Save up to 30% off and Enjoy best TV<br/> offers and qualities</p>
</div>
</div>
</div>
<div className='row d-flex'>
<div className='col-md-6'>
<img className='ps-2' src={require("../assets/lg.webp")} /> 
<img className='ps-2' src={require("../assets/tor.webp")} /> 
<img  className='ps-2' src={require("../assets/toa.webp")} /> 
<img className='ps-2' src={require("../assets/sam.webp")} /> 

</div>
</div>
</div>
<div>
  <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='foottxt'> Shop All TVS</span>
    </a>
</div>      
</div>
</div>
<div class="subnav">
<button class="subnavbtn">Large Appliances</button>
<div class="subnav-content">
<div className='row d-flex gx-0'>
<div className='row'>
<div className='col-8  ps-5'>
<a  className=" subnava" href="#link1"><h4 className='maiin'>Air Conditioners</h4>
<ul className='sub2nav mx-4'>
<li  className='sub2navli'>Unionaire Air Conditioner</li>
<li className='sub2navli'>Carrier Air Conditioner</li>
<li  className='sub2navli'> LG Air Conditioner</li>
<li className='sub2navli'> Midea Air Conditioner</li>
</ul></a>

<a  className=" subnava" href="#link2"><h4 className='maiin'>Cookers</h4>
<ul className='sub2nav '>
<li className='sub2navli'> Fresh Cookers</li>
<li className='sub2navli'> La Germania Cookers</li>
<li className='sub2navli'> UnionAire Cookers</li>
<li className='sub2navli'>Zanussi Cookers</li>
</ul>
</a>
<a className=" subnava" href="#link3"><h4 className='maiin'>Freezers</h4>
<ul className='sub2nav '>
<li className='sub2navli'>Beko Freezers</li>
<li className='sub2navli'>W.Alaska Freezers</li>
<li className='sub2navli'> Fresh Freezers</li>
<li className='sub2navli'>Toshiba Freezers</li>
</ul>
</a>
<a  className=" subnava" href="#link4"><h4 className='maiin'>Washing Machines</h4>
<ul className='sub2nav '>
<li className='sub2navli'>Zanussi washing Machines</li>
<li className='sub2navli'> Fresh washing Machines</li>
<li className='sub2navli'> Toshiba washing Machines</li>
<li className='sub2navli'>LG washing Machines</li>
</ul>
</a>
</div>
<div className='col-4'>
<div className='largetext'>
<h5 className='deal'>Great Deals</h5>
<p className='sale'>Enjoy Installment up to 36 months</p>
</div>
</div>
</div>
<div>
  <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='foottxt'> Shop All Large Appliances</span>
    </a>
</div>    
</div>
</div>

</div>
<div class="subnav">
<button class="subnavbtn">Small Appliances</button>
<div class="subnav-content">
<div className='row d-flex gx-0'>
<div className='row'>
<div className='col-8 ps-5'>
<a className=" subnava" href="#link1"><h4 className='maiin'>Vacuum Cleaners</h4>
<ul className='sub2nav mx-4'>
<li className='sub2navli'> Carpet Vacuum Cleaners</li>
<li className='sub2navli'>Drum Vacuum Cleaners</li>
<li className='sub2navli'>Handheld Vacuum Cleaners</li>
<li className='sub2navli'>Steam Vacuum Cleaners</li> 
<li className='sub2navli'> Stick Vacuum Cleaners</li>

</ul></a>
<a  className=" subnava" href="#link2"><h4 className='maiin'>Irons</h4>
<ul className='sub2nav '>
<li className='sub2navli'> Garment Steamers</li>
<li className='sub2navli'> Steam Generator</li>
<li className='sub2navli'>Dry Irons</li>
</ul>
</a>
<a  className=" subnava" href="#link3"><h4 className='maiin'>Scales</h4>
<ul className='sub2nav '>
<li className='sub2navli'> Mechanical Kitchen Scale</li>
<li className='sub2navli'>Body Scale </li> 
</ul>
</a>

<a className=" subnava" href="#link6"><h4 className='maiin'>Heaters </h4>
<ul className='sub2nav'>
<li className='sub2navli'> Radiant Heaters</li>
<li className='sub2navli'> Ceramic Heaters</li>
<li className='sub2navli'>Quartz Heaters</li>

</ul>
</a> 

</div>
<div className='col-4'>
<div className='smalltext'>
<h5 className='deal'>Great Deals</h5>
<p className='sale'>Expect to see exclusive Offers with<br/> up to 36 monthly installment</p>

</div>
</div>
</div>
<div>
<a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='foottxt'> Shop All Small Appliances</span>
    </a></div>
</div>
</div></div>

<a  className='nava' href="#home"> Kitchen Applicances</a>
<a  className='nava' href="#home">  Electronics</a>
<a className='nava'  href="#home"> Labtop&PCS</a>
<a  className='nava' href="#home"> Health&Beauty</a>
<a  className='nava' href="#home"> Vehicles</a>

 

</div> 
</div>
</div>
      </div>


      );
    }
    else if (this.state.whichComponentToShow === 'Secnav') {
      return (

        <div>
        
          <div className='row'>
 
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
   
     <div className='container-fluid flex items-center'>
  <div className='sidemenu'>
  <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
  <div className='maincol text-center text-tertiary-600  bg-primary-700 py-5 font-light'> 
  
  <p className='collapstext '>The Easiest and Fastest instalment system</p>
  </div>
  <div className='row'>
   
  <div className='butn  col-3 ' onClick={() => {
            this.setState({ whichComponentToShow: 'Nav' });

          }}>
            <div >
            < CgCloseR size={30} />
          </div>
</div>
<div className='col-5'>
     <img className='piclogo' src={require("../assets/seclogo.png")} /> 
 </div>  </div> </nav> 
   </div>
     <div className='text-center'>
     <p className='TXTLOG'>Login or Register</p></div>
  
  <hr/>  

</div>
</div>
</nav>
 </div>

          <div className='items'>
            <ul className='mt-8 space-y-10 px-6'>

              <li className='itemsli'> <div >
                <img className='ofer' src={require("../assets/offer.webp")} />
                <a className='itemsa px-2 text-danger' href="#home">HotDeals</a></div>
              </li>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/mobiles-_-tablets.png")} />

                      <a  className='itemsa' onClick={() => {
                        this.setState({ whichComponentToShow: 'MobList' });
                      }}>
                        Mobiles & Tablets
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/tv_home_theater_2x.png")} />

                      <a className='itemsa' onClick={() => {
                        this.setState({ whichComponentToShow: 'TVsList' });
                      }}>
                        Televisions
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/large_appliances_2x.png")} />

                      <a  className='itemsa' onClick={() => {
                        this.setState({ whichComponentToShow: 'LargeList' });
                      }}>
                        Large Appliances
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>

                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/small_appliances_2x.png")} />

                      <a  className='itemsa' onClick={() => {
                        this.setState({ whichComponentToShow: 'SmallList' });
                      }}>
                        Small Appliances
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/kitchen_appliances_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">Kitchen Appliances</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />

              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/electronics_2x_2.png")} />
                    <a className='itemsa px-2 text-body' href="#company">Electronic</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>

                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/computers_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">Laptop&Pc</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/health_and_wellness_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">Health &Beauty</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div>
                </div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/vehicles_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">Vehicles</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
            </ul>
          </div>
          <div className='minifooter'>
            <ul>
              <li className='minili'><a className='minia'  href='#'> <BsWallet2 size={18} /> Pay Installment</a></li><br />
              <li className='minili'><a  className='minia'  href='#'> <FiPhoneCall size={18} />  Call 19900</a></li><br />
              <li className='minili'><a className='minia'  href='#'> <TbBuildingStore size={18} />  Store Locator</a></li><br />
              <li className='minili'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <a  className='minia' href='#'><TbWorld size={18} />Change Language
                    </a>
                  </div> <div>
                    <span className='px-5'>عربى</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    else if (this.state.whichComponentToShow === 'MobList') {
      return (
        <div>
          <MobList moveData={moveData} />
        </div>
      );
    }
   
    else if (this.state.whichComponentToShow === 'TVsList') {
      return (
        <div>
          <TVsList moveData={moveData} />
        
        </div>
      );
    }
   
    else if (this.state.whichComponentToShow === 'SmallList') {
      return (
        <div>
          <SmallList moveData={moveData} />
        </div>
      );
    }
    else if (this.state.whichComponentToShow === 'LargeList') {
      return (
        <div>
          <LargeList moveData={moveData} />
        </div>
      );
    }
    return null;

  }

}
export default Navbar

