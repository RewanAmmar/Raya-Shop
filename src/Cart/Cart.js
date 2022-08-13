import React from 'react'
import './cart.css'
import EachProduct from './EachProduct';
import Footer from '../Footer/Footer';


import SliderShared from './Slider';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
export default function Cart() {

    const settings = {
        className: "slider variable-width",
        // dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>

     <div className='cartComponent'>
        <div className='container d-flex flex-column align-items-center'>
            <h2>MY CART</h2>
            <p>You have 2 products in your cart</p>
            <div className='d-flex justify-content-between my-5 forResponsCart'>
                {/* eact product  */}
                <div className='d-flex flex-column'>

                <EachProduct media={"https://picsum.photos/128/128"} title={"OPPO Reno 6 Dual SIM, 128GB, 8GB RAM, 4G , Black"} cost={"6000"} quantity={2}/>
                <EachProduct media={"https://picsum.photos/128/128"} title={"OPPO Reno 6 Dual SIM, 128GB, 8GB RAM, 4G , Black"} cost={"1200"} quantity={2}/>
                
                
                </div>
                {/* end eact product  */}

                <div className='paymentSummary '>
                    <div className='px-4 py-4'>
                        <h2>Payment Summary</h2>
                        <div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>Subtotal</span>
                                <span>1000<span> EGP</span></span>
                                
                            </div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>Shipping Fees</span>
                                <span>To be calculated<span> EGP</span></span>
                                
                            </div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>Shipping Fees</span>
                                <span>To be calculated<span> EGP</span></span>
                                
                            </div>
                            <div></div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>Total VAT Included</span>
                                <span style={{color:"#006CB7",fontSize:"18px",fontWeight:"500"}}>4,428<span> EGP</span></span>
                                
                            </div>
                            <div><span> Installments Unavailable </span><p> This order does not qualify for Raya Installments. To use Raya Installments, all items in cart must apply.</p></div>
                            <button className='btn text-white '>Pay With Raya Installments</button>
                            <div></div>
                            <button className='btn'>Proceed To Checkout</button>
                            <div className='d-flex justify-content-around'>
                                <img src={"https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png"}/>
                                <img src={"https://www.pngitem.com/pimgs/m/1-17788_mastercard-logo-transparent-vector-logo-png-mastercard-png.png"}/>
                            </div>


                        </div>
                    </div>
                </div>
                

            </div>
            
           
        </div>
     </div>
    <SliderShared/>
     <Footer/>

    
    </>
  )
}
