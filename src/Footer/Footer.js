import React from 'react'
import './Footer.css'
import './FooterResponsive.css'
import { FaApple,FaGooglePlay,FaCcMastercard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightSquareFill,BsInstagram } from "react-icons/bs";
import { RiFacebookFill ,RiVisaLine} from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='container'>
            <div className='footerContent'>
                <div className='footerUpper'>
                    <div>
                        <h4>About Raya</h4>
                        <p>Who we are</p>
                        <p>Store Locator</p>
                        <p>Raya Installments</p>
                    </div>
                    <div>
                        <h4>Customer Support</h4>
                        <p>Live Chat</p>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h4>More</h4>
                        <p>Returns and Refund</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <h4>Download App</h4>
                        <p><FaGooglePlay className='FaApple fs-6'/>Google Play</p>
                        <p> <FaApple className='FaApple'/>  App Store</p>
                        
                    </div>
                    <div >
                        <h4>Stay in the know</h4>
                        <p>Subscribe to our newsletter</p>
                
                        <div className='MdOutlineEmailDiv'>
                            <MdOutlineEmail className='MdOutlineEmail'/>
                            <input type="text" className='inputFooter' placeholder='Email-(ex@gmail.com)'/>
                             <BsArrowRightSquareFill className='BsArrowRightSquareFill'/>
                        </div>
                    </div>
                </div>


                <div className='footerLower'>
                    <div>
                        <BsInstagram className='mx-3 fs-3'/>
                        <RiFacebookFill className='mx-3 fs-3'/>
                        <GrLinkedinOption className='mx-3 fs-3'/>
                    </div>
                    <div>©2022 - Raya shop | All right reserved</div>
                    <div>
                        <RiVisaLine className='mx-3 fs-1'/>
                        <FaCcMastercard  className='mx-3 fs-1'/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
