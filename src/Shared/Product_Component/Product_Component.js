import React, { useEffect } from "react";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";
import Product_Card from "../Product_Card/Product_Card";
import { useSelector } from "react-redux";





const Product_Component = (props) => {


    
    const state = useSelector((state) => state.product)
   



    useEffect(() => {

        // console.log(state)

    }, []);

    return (<>

        <div className="mx-3">
            <div className="container-fluid">

                <div className="row d-flex flex-column flex-grow-1">

                    <div className="col-12">


                    <div className="col-12 py-5">
                            <div className="d-flex mx-3 col-12 justify-content-between flex-wrap">

                                <span className="col-md-6 col-12">{state.length} Product</span>

                                <div className="d-flex">
                                <FaSortAmountDown />
                                <select className="d-flex px-5 border-bottom dropDown active" value="">
                                    <option className="dropdown-item" value="1" selected disabled>Position</option>
                                    <option className="dropdown-item" value="2">Price</option>
                                    <option className="dropdown-item" value="3">A-z</option>
                                    <option className="dropdown-item" value="4">Rating</option>
                                </select>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex flex-wrap justify-content-center">
                            
                        <Product_Card prd={state}/>

                        </div>



                        <div className="endLine mt-5"><span>Showing 20 out of 2022</span></div>

                        <div className="d-flex align-items-center justify-content-center my-5">
                            <div className="mx-3">
                                <i class="bi bi-arrow-down loadMore btn text-light"></i>
                            </div>
                            <p className="mt-3">Load More</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    </>);
}

export default Product_Component;