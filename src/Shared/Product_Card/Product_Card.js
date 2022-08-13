import React from 'react'
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";

const Product_Card = (props) => {

    const products = props.prd


    return (
        products.map(function (prd) {

            return (
                <div key={prd.prd_id} className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                    <div className="d-flex position-absolute heart">
                        <FiHeart className="loveBtn grow" />
                    </div>
                    <div className="my-4 d-flex justify-content-center">
                        <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                    </div>
                    <div className="ProductCard__Details p-3 bg-white">
                        <div>
                            <StarRating size={5} value={0} disable />
                        </div>
                        <p className="font-body text-sm">{prd.name}</p>
                        <span className="product-price">{prd.price}</span>
                        <div class="border border-secondary-200 w-full mt-1 mb-3"></div>
                        <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                        <button type="button" class="compareButton p-3 text-sm mb-2">
                            <MdCompare className="mx-3" size={18} />
                            Compare
                        </button>
                    </div>
                </div>
            )
        })
    )
}



export default Product_Card;