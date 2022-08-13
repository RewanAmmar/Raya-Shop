import React from 'react'
import './payInstallment.css'
import Footer from '../Footer/Footer'
import { FaCcMastercard } from "react-icons/fa";
import {RiVisaLine} from "react-icons/ri";

export default function PayInstallment() {
  return (
    <>
 
    <div className='payInstallment py-5'>
        <div className='container'>
            <div className='payInstallmentContent d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='py-2'>PAY INSTALLMENTS</h1>
                <h2  className='py-2'>Pay Your Installment Online</h2>
                <div className='pAndIcons'>
                    <p>Pay your installment now using Visa or Mastercard.</p>
                    <div className='icons'>
                    <RiVisaLine className='mx-3 fs-1'/>
                        <FaCcMastercard  className='mx-3 fs-1'/>
                    </div>
                </div>
                <form>
                    <label>Enter your nation id</label>
                     <input className='form-control inId' placeholder='ex. 0000 0000 0000 0000' type="number"/>
                     <button className='btn border-2 button2'>Find Due Amounts</button>
                </form>
                
                    
                    
                
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
