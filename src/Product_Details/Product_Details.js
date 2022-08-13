import React, { useState } from 'react'
import { GrFormAdd } from "react-icons/gr";
import Slider from "react-slick";
import ProgressBar from 'react-bootstrap/ProgressBar';
import StarRating from "star-rating-react";
import mob3 from "../assets/mob3.jpg";
import { MdCompare,MdOutlineBook } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegShareSquare } from "react-icons/fa"
import { AiOutlineRight } from "react-icons/ai"
import { GoPlus } from "react-icons/go"
import { FaMinus } from "react-icons/fa"
import { BsCart2,BsShieldCheck } from "react-icons/bs"
import {BsJournalBookmark} from "react-icons/bs"
import {GrSecure} from "react-icons/gr"
import {BiStoreAlt} from "react-icons/bi"


export default function Product_Details() {

    const settings = {
        className: "slider variable-width",
        // dots: true,

        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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


    const setting = {

        dots: false,
        dotsClass: "slick-thumb",
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
    };


    const [count, setCount] = useState(0);
    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 flex-wrap d-flex p-2 m-2'>
                        <div className='m-3'>

                            <div className='Card_Details rounded-5 p-5 shadow-sm'>


                                <Slider className='d-flex justify-content-center align-items-center' {...setting}>
                                    <div className='Image_Card_Details'>
                                        <img src={"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/z/pzzc96c_thosi2kyms3ihdvn.jpeg?format=webp&width=368"} />
                                    </div>
                                    <div className='Image_Card_Details'>
                                        <img src={"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/q/k/qk7n7iz_3vt5fsgzv1p9ta9c.jpeg?format=webp&width=367"} />
                                    </div>
                                    <div className='Image_Card_Details'>
                                        <img src={"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/z/pzzc96c_thosi2kyms3ihdvn.jpeg?format=webp&width=368"} />
                                    </div>
                                    <div className='Image_Card_Details'>
                                        <img src={"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/q/k/qk7n7iz_3vt5fsgzv1p9ta9c.jpeg?format=webp&width=367"} />
                                    </div>
                                    <div className='Image_Card_Details'>
                                        <img src={"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/q/k/qk7n7iz_3vt5fsgzv1p9ta9c.jpeg?format=webp&width=367"} />
                                    </div>
                                </Slider>

                            </div>


                        </div>
                        <div className='col-lg-6 col-12 m-3'>
                            <div className='col-12 d-flex'>
                                <div className='col-12 d-flex justify-content-between align-items-center'>
                                    <div className='d-flex'>
                                        <p className='details_title'>Xiaomi Redmi Note 11s Dual SIM, 128GB, 8GB RAM, 4G, Grey</p>
                                    </div>

                                    <div className='d-flex'>
                                        <span className='btn btn-details-style shadow-sm mx-1'><i class="bi bi-reply fs-5"></i></span>
                                        <span className='btn btn-details-style shadow-sm mx-1 grow'><AiOutlineHeart size={20} /></span>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className='col-12 mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <span className='product-price'>7000 EGP</span>
                                    <span className='badge badge_prop d-flex align-items-center px-3'>10% OFF</span>
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center mt-4 Product_Specifications p-3'>
                                <div className='col-8'>
                                    Or Pay with Raya Installments starting From 401 / 24 Months with Raya Installments
                                </div>
                                <div className='col-4'>
                                    <a href='#'>More payment methods <AiOutlineRight /></a>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 justify-content-between align-items-center mt-4 d-flex'>
                                <span className='Product_Description_txt'>Select Qty:</span>
                                <div>
                                    <button className='btn mx-3' onClick={dec}><FaMinus /></button>
                                    {count}
                                    <button className='btn mx-3' onClick={inc}><GoPlus /></button>
                                </div>
                            </div>
                            <div class="line col-md-6 col-12 mt-2"></div>

                            <div className='col-12 mt-4 d-flex'>
                                <button className='btn col-5 d-flex flex-grow-1 justify-content-center align-items-center me-2 Add_To_Cart px-5 py-3'><BsCart2 className='mx-2' size={25} />Add To Cart</button>
                                <button className='btn col-5 d-flex flex-grow-1 justify-content-center align-items-center ms-2 Add_To_Compare px-5 py-3'>Add To Compare</button>
                            </div>
                            <div className='col-12 mt-4 d-flex'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsJournalBookmark size={23}/></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='w-75'>Delivery Time Inside Cairo & Giza</span>
                                        <span className='Product_Specifications_txt'>3-5 Business Days</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsJournalBookmark size={23}/></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='w-75'>Delivery Time Outside Cairo & Giza</span>
                                        <span className='Product_Specifications_txt'>3-5 Business Days</span>
                                    </div>
                                </div>
                            </div>
                            <div class="line col-12 mt-2"></div>
                            <div className='col-12 mt-4 d-flex flex-wrap justify-content-evenly'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsShieldCheck size={30}/></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span>Warranty</span>
                                        <span className='Product_Specifications_txt'>1 Year</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><GrSecure size={30}/></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>Secure Payment</span>
                                        <span className='Product_Specifications_txt'>Cash On Delivery</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><MdOutlineBook size={30}/></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>Free Return</span>
                                        <span className='Product_Specifications_txt'>For 14 Days</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BiStoreAlt size={30}/></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>Sold By</span>
                                        <span className='Product_Specifications_txt'><a href='#'>Dream Store</a></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 flex-column d-flex align-items-center justify-content-center'>


                        <div className='col-7'>
                            <div className='d-flex justify-content-center mt-5 mb-2'><h3 className='Details_Headers'>PRODUCT DETAILS</h3></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Description" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>Product Description</span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Description">
                                <div className='d-flex flex-column '>
                                    <p className='Product_Description_txt'>Brand: Xiaomi</p>
                                    <p className='Product_Description_txt'>Memory Capacity: 128GB</p>
                                    <p className='Product_Description_txt'>Ram: 8GB</p>
                                    <p className='Product_Description_txt'>Color: Grey</p>
                                </div>
                            </div>
                            <div className="Description_Line"></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Specifications" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>Product Specifications</span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Specifications">


                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Display Type</span><span>Amoled</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Display Size In Inches</span><span>6.4 Inches</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Display Resolution In Pixels</span><span>1080 x 2400 pixels</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Touch Screen</span><span>Yes</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Processor CPU</span><span>Octa-core</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Processor Chipset</span><span>Mediatek Helio G96</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Operating System</span><span>Android</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Operating System Version</span><span>Android 11, MIUI 13</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Internal Memory GB</span><span>128 GB</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Memory RAM In GB</span><span>8 GB</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Front Camera</span><span>16 MP</span>
                                    </div>
                                </div>
                                <div className='p-3 Product_Specifications_txt rounded-4'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Rear Camera</span><span>108 MP + 8 MP + 2 MP + 2 MP</span>
                                    </div>
                                </div>


                            </div>
                            <div className="Description_Line"></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Refund" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>Return & Refund</span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Refund">
                                <div className='Product_Description_txt'>
                                    <p className='Product_Specifications_txt'>Returns within 14 days of delivery, Learn more about <a href='#'> the Return & Refund Policy</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 flex-column d-flex align-items-center justify-content-center'>
                        <div className='col-5 mt-5'>
                            <div className='d-flex justify-content-center my-5 '><h3 className='Details_Headers'>RATING & REVIEWS</h3></div>
                            <div className='progress_Rating_bg'>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 mt-5'>
                        <div className='d-flex justify-content-center mt-5 mb-2'><h3 className='Details_Headers'>SIMILAR PRODUCTS</h3></div>
                        <Slider className="slick-list col-10" {...settings}>

                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>

                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div
                                        
                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>


            <div className='container-fluid Viewed_Product'>

                <div className='container mt-5 py-5'>
                    <div className='d-flex justify-content-center mb-3 mb-2'><h3 className='Details_Headers'>PRODUCT DETAILS</h3></div>
                    <Slider className="slick-list" {...settings}>

                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div
                                    
                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    Compare
                                </button>
                            </div>
                        </div>
                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div
                                    
                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    Compare
                                </button>
                            </div>
                        </div>
                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div
                                    
                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    Compare
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>

        </>
    )
}
