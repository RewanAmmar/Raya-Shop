import React, { useContext, useEffect } from 'react'
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Product_Details from './../../Product_Details/Product_Details';
import { search } from '../Contexts/SearchProvider';

const Product_Card = (props) => {

    const products = props.prd
    const sort = props.sort

    const { searchQuery, setSearchQuery } = useContext(search)

    
    function sorts(a, b) {
        if (sort === "asc") {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        } else if (sort === "des") {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        } else if(sort === "A-Z") {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }else{
            return
        }
        
    }


    useEffect(() => {



    }, [sort]);


    return (
        products.sort(sorts).filter(prds => prds.name.toLowerCase().includes(searchQuery)).map(function (prd) {

            return (
                <Link to={{ pathname: `/Details/${prd.prd_id}`, prdObj: prd }} style={{ textDecoration: 'none', color: 'black' }}>
                    <div key={prd.prd_id} className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-2 my-2 position-relative" style={{ width: "14rem" }}>
                        <div className="d-flex position-absolute heart">
                            <FiHeart className="loveBtn grow" />
                        </div>
                        <div className="my-4 d-flex justify-content-center">
                            <img src={prd.img} alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
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
                </Link>
            )
        })
    )
}



export default Product_Card;