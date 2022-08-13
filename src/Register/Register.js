import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
import { useHistory } from 'react-router-dom'



export default function Register() {



  return (
    <>
    {/* <InternalHeader/> */}
    <InternalHeader/>
     <div className='register'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><Link to='/login'> Back</Link></div>
            <div className='content '>
             
                <div className='rightRigister'>
                  <h1>CREATE ACCOUNT </h1>
                  <h2>Login to your account for a faster checkout process</h2>
                  <form >
                    <input type="text" className='form-control' required placeholder='Enter Name'
                    />
                    
                    <input type="text" required className='form-control' placeholder='Enter Email'
                   />
                    
                    <input type="number" required className='form-control' placeholder='Phone'
                   />
                  
                    <input type="password" required className='form-control' placeholder='Enter Password'
                    />
                  
                    
                    <button className='btn button2Register'>Create Account</button>
                  </form>
                </div>
                <div className='left'>
                  <div className='imgbg d-flex'>
                    <h1>Don’t Have An <br/> Account?</h1>
                    <p>No Problem, Create an Account &amp; Enjoy;</p>
                    <ul>
                      <li>// Fast &amp; Easy checkout</li>
                      <li>// Order Tracking</li>
                      <li>// Installments Tracking</li>
                    </ul>
                    <Link to="/login"><button  className='btn btn-light border-2 button1'>Login To My Account</button></Link>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerRegister'>
              <p>Any personal information you give us will be handled according to our <a href=''>Privacy Policy</a></p>
                
            </footer>
            </>
  )
}
