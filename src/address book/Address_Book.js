import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import {
  BsFillHeartFill,
  BsDoorClosed,
  BsBuilding,
  BsSignpostFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { GiDirectionSign, GiStairs } from "react-icons/gi";
import './Address_Book.css'

export default function Address_Book() {
  return (
    <>
      <IoIosArrowBack size={20} />
      <a href="#" className=" address_a">
        Back To My Address Book
      </a>

      <p className="account_h1 p-2 d-block">ADD NEW ADDRESS</p>

      <p className="address_p ">New Address Details</p>

      <form className="mt-5">
        <div class="input-group-lg">
         
          <FaUser size={20} className="icon" />
          <input
            id="address_form"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            required
          />
           <label className="account_label">
            <span className="span">Full Name</span>
            <span className="span">*</span>
          </label>
        </div>

        <div class="input-group-lg">
          <BsTelephoneFill size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control "
            placeholder="Phone Number "
            required
          />
          <label className="account_label">
            <span className="span">Phone Number</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="row">
          <div class="col input-group-lg">
            <ImEarth size={20} className="icon" />
            <input
              id="address_form"
              type="Number"
              class="form-control"
              placeholder="Select Governorate "
              aria-label="First name"
              required
            />
            <label className="account_label">
              <span className="span">Governorate</span>
              <span className="span">*</span>
            </label>
            {/* <span className="icon">
              <IoIosArrowDown size={23} />
            </span> */}
          </div>
          <div class="col input-group-lg">
            <GoLocation size={20} className="icon" />

            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder="Select Area"
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">Area</span>
              <span className="span">*</span>
            </label>
          </div>
        </div>
        <div class="input-group-lg">
          <GiDirectionSign size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control"
            placeholder="Street"
            required
          />
          <label className="account_label">
            <span className="span">Street</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="row">
          <div class="col input-group-lg">
            <BsBuilding size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder="Example:22"
              aria-label="First name"
              required
            />
            <label className="account_label">
              <span className="span">Building Number</span>
              <span className="span">*</span>
            </label>
          </div>
          <div class="col input-group-lg">
            <GiStairs size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder="Example:1"
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">Floor</span>
            </label>
          </div>
          <div class="col input-group-lg">
            <BsDoorClosed size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder="Example:1"
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">Apartment</span>
            </label>
          </div>
        </div>
        <div class="input-group-lg">
          <BsSignpostFill size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control"
            placeholder="Example:Home Address, Work Address"
            required
          />
          <label className="account_label">
            <span className="span">Address Name</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="mb-3 mt-5 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Set Default Address
          </label>
        </div>
        <div className="items-center col-md d-flex mt-15">
          <a href="#" class=" address_button">
            Save Address
          </a>
          <a href="#" className="address_buttonn">
            Cancel
          </a>
        </div>
      </form>
    </>
  );
}
