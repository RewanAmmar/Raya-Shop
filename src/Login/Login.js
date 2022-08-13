import React from 'react'

import InternalHeader from '../InternalHeader/InternalHeader';
import './Login.css';
import './LoginResposive.css'

export default function Login() {
  

  



  return (<>
  <InternalHeader/>
    <div className='login'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><a href=''> Back</a></div>
            <div className='content '>
                <div className='left'>
                  <div className='imgbg'>
                    <h1>Don’t Have An <br/> Account?</h1>
                    <p>No Problem, Create an Account &amp; Enjoy;</p>
                    <ul>
                      <li>// Fast &amp; Easy checkout</li>
                      <li>// Order Tracking</li>
                      <li>// Installments Tracking</li>
                    </ul>
                    <button className='btn btn-light border-2 button1' >Create Account</button>
                  </div>
                </div>
                <div className='rightLogin'>
                  <h1>LOGIN</h1>
                  <h2>Login to your account for a faster checkout process</h2>
                <form>
                  <input type="text" className='form-control' placeholder='Enter Email'/>
                  {/* <span>This field is required</span> */}
                  <input type="password" className='form-control' placeholder='Enter Password'/>
                  {/* <span>This field is required</span> */}
                  <div className='link'><a href='#'>Forgot Password?</a></div>
                  <button className='btn btn-primary button2'>Login to My Account</button>
                </form>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerLogin'>
              <p>Any personal information you give us will be handled according to our <a href=''>Privacy Policy</a></p>
                
            </footer>
            </>
  )
}
