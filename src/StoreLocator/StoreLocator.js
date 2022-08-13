import React from "react";
import "./StoreLocator.css";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";

import Footer from '../Footer/Footer'
export default function StoreLocator() {
  return (
    <>

      <div className="StoreLocator">
        <div className="container">
          <h1 className="heading">STORE LOCATOR</h1>
          <p className="fw-bolder">Branches</p>
          <h6>66 Available branches for Raya in Egypt</h6>
          <div className="cards">
            <div className="eachCard">
              <h3>Samsung Wadi El Nile</h3>
              <p> <GrLocation/>  15 Wadi Al Nile, Gazirat Mit Oqbah, Agouza, Giza Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Huawei Nozha (I2)</h3>
              <p> <GrLocation/>  53, Nozha, Street, Cairo Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Huawei Tanta (I2)</h3>
              <p> <GrLocation/>  beside Fat-hallah market, 9 Saeed St, Tanta Qism 2, Tanta Second, Gharbia Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>I2 Alex City Center</h3>
              <p> <GrLocation/>  Block 502, Rd. 9, El Mokattam, in front of etisalat, El Mokattam</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Samsung Mokattam</h3>
              <p> <GrLocation/>  Cairo Alex Desert Rd, Qetaa at Tarik as Sahrawi, Al Amaria First, Alexandria Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Samsung Wadi El Nile</h3>
              <p> <GrLocation/>  15 Wadi Al Nile, Gazirat Mit Oqbah, Agouza, Giza Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Samsung Wadi El Nile</h3>
              <p> <GrLocation/>  15 Wadi Al Nile, Gazirat Mit Oqbah, Agouza, Giza Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

            <div className="eachCard">
              <h3>Samsung Wadi El Nile</h3>
              <p> <GrLocation/>  15 Wadi Al Nile, Gazirat Mit Oqbah, Agouza, Giza Governorate</p>
              <p> <AiOutlinePhone/> +19900</p>
              <a href="#">Get Direction</a>
            </div>

          </div>

          <div className="showing66">
            <div></div>
            <div>Showing 66 out of 66</div>
            <div></div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}
