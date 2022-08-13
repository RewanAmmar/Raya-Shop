import React from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import './Side_Account.css'

export default function Side_Account() {
  return (
    <>
   
            <div className="account_number border-b border-primary-100">
              <h6>Hello, Rewan</h6>
              <p className="account_paragraph d-flex items-center">
                0 Points
                <a href="#" className="d-flex items-center info_a ">
                  <div className="info_icon">
                    <i className="fa-solid fa-info"></i>
                  </div>
                </a>
              </p>
              <p className="account_paragraph">
                Credit Limit:
                <span
                  data-after-content="EGP"
                  className="inline-flex items-center "
                >
                  0 EGP
                </span>
              </p>
            </div>
            <div className="account_list d-block">
              <ul className="account_ul">
                <li className="pb-4 pt-4 text-primary-700  is-active">
                  <a className="d-flex items-center account_a">
                    <BsPersonFill size={25} />
                    <span className="ml-4 ">Account Overview</span>
                  </a>
                </li>
                <li className="pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <FiShoppingBag size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                      My Orders
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1 ">
                  <a className="d-flex items-center account_a">
                    <MdEditCalendar size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold account_span">
                      My Installments
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <BsFillHeartFill size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                      My Wishlist
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <HiLocationMarker size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                      My Address Book
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1 ">
                  <a className="d-flex items-center account_a">
                    <AiFillSetting size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                      Account Settings
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <RiLogoutBoxRLine size={40} className="logout_icon" />
                    <span className=" font-bold account_logout">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          
    </>
  )
}
