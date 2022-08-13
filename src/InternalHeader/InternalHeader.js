import React from 'react'
import './InternalHeader.css'
import { GrSecure } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';


export default function InternalHeader() {
  return (
    <div className='InternalHeader'>
        <div className='container'>
            <div className='InternalHeaderContent'>
                <div>
                    <AiFillLock color='white' className='AiFillLock'/>
                    <span>Secure Checkout</span>
                </div>
                <div><img src={require('../assets/Logo.jpg')}/></div>
                <div> <FiPhoneCall className='FiPhoneCall'/> <span>Customer Support 19900</span></div>
            </div>
        </div>
    </div>
  )
}
