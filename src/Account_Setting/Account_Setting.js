import React from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephoneFill} from "react-icons/bs";
import {RiLockPasswordLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import './Account_Setting.css'

export default function Account_Setting() {
  return (
    <>
 
         <p className="account_h1 p-2 d-block">ACCOUNT SETTING</p>

         <h4 className="text_h4">presonal Details</h4>
         <div className="d-flex justify-content-between aligh-items-center">
          <div className=''>
            <dt className="setting p-2">
            <BsPersonFill size={25}/>
            <span className="mx-4 text-secondary-500">Name</span>
            </dt>
            <dt className="setting p-2 mt-5">
            <AiOutlineMail size={25}/>
                <span className="pl-2 mx-4 text-secondary-500">Email</span>            
            </dt>
            </div>
            <div className=' '>
            <dt>
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">Edit User Name</a>
            
                </dt>
              <dt className="mt-5 p-2">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">Edit Email</a>
            
                </dt>
            </div>
            </div>
            <div className="line p-10">
            <h4 className="pt-5 text_h4">Login Credential</h4>
            <div className="d-flex justify-content-between aligh-items-center">
            <div>
                <dt className="setting p-2">
                <BsTelephoneFill size={25}/>
                <span className="mx-4 text-secondary-500">Phone</span>
                </dt>
                <dt className="setting p-2 mt-5">
                    <RiLockPasswordLine size={25}/>
                    <span className="mx-4 text-secondary-500">Password</span>
                    </dt>
            </div>
            <div>
                
                    <dt className="password">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">Edit Password</a>
            
                </dt>
            </div>
            </div>
            </div>
         
       
    </>
  )
}
