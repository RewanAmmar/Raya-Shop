import React from 'react'
import './cart.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';


export default function EachProduct(props) {
  return (<>
  
    <div className='eachProduct d-flex px-3 py-3 bs-4 shadow mx-5'>
    <img src={props.media}/>
    <div className='d-flex flex-column '>
        <a href='#'>{props.title}</a>
        <div>
            <h6>Select Qty</h6>
            <input className='form-control' value={props.quantity} type="number"/>
        </div>
        
    </div>
    <div className='d-flex flex-column justify-content-between'>
        <div className='d-flex justify-content-between'>
            <button className='btn AiOutlineHeart '><AiOutlineHeart/></button>
            <button className='btn BsTrash'><BsTrash/></button>
        </div>
        
        <div className='pb-4'><span>{props.cost}<span> EGP</span></span></div>
    </div>
</div>
<div className='installment-plans-section'>
    <div className='row'>
        <div className='col col-lg-8'>
            <p>Or Pay with Raya Installments starting From{`${parseInt(props.cost/6)}`} / 6 Months with Raya Installments</p>
        </div>
        <div className='col col-lg-4'>
            <a href='#'>More payment methods</a>
        </div>
    </div>
</div>
</>
  )
}
