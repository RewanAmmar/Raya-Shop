import React from 'react'
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';


import { useTranslation } from "react-i18next";


    const Wishlist= () => {

        const { t, i18n } = useTranslation();


  return (
    <>
    <div className='container'>
        <div className='row'>

            <div className='col-12 my-5 ms-3'>
                <h3 className='pageHeader'>{t("aa.label")}</h3>
                <p className='Product_Description_txt'>{t("ak.label")}</p>
            </div>

            <div className='col-12 d-flex flex-wrap justify-content-center'>

            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
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
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div  col-lg-2 col-md-3 col-sm-4 col-12 class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
            </div>

            <div className="endLine my-5"><span>Showing 20 out of 2022</span></div>
        </div>
    </div>
    </>
  )
}
export default  Wishlist;