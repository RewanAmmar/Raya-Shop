import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import React, { component } from "react";
import Slider from "react-slick";
import image1 from "../../src/assets/image1.webp";
import image3 from "../../src/assets/image3.webp";
import image2 from "../../src/assets/image2.webp";
import image4 from "../../src/assets/image4.webp";
import image5 from "../../src/assets/image5.webp";
import image6 from "../../src/assets/image6.webp";
import image7 from "../../src/assets/image7.webp";
import image from "../../src/assets/image.webp";
import mob3 from "../assets/mob3.jpg";
import download1 from "../assets/download1.webp";
import offer from "../assets/offer.webp";
import StarRating from "star-rating-react";
import Carousel from "react-bootstrap/Carousel";
import cool from "../assets/cool.webp";
import './home.css'
import { useTranslation } from "react-i18next";





   

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


 const Home = () => {
 const{ t, i18n } = useTranslation();

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
        <div className="container col-12">
          <div className="row">
            <div className="col-6 ">
              <Carousel>
                <Carousel.Item interval={10000}>
                  <img className="d-block w-100 carousalImg" src={image1} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100 carousalImg" src={image3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousalImg" src={image4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousalImg" src={image5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousalImg" src={image6} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousalImg" src={image7} alt="" />
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="col-3  ">
              <img className="ads" src={image} alt="" />
            </div>
            <div className="col-3 ">
              <img className="ads" src={image2} alt="" />
            </div>
          </div>
          </div>
              <div className=" container">
          <div className="sectionIcon w-100 h-100 flex-wrap justify-between row">
            <section className=" container mx-auto w-full d-flex justify-content-evenly">

                <div className="sectionParag ">
                  <p className="sectionText text-danger">Hot Deals</p>
                </div>
              
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="	https://rayashop.hypernode.io/media/catalog/category/mobiles-_-tablets.png"
                  alt="Hot Deals"
                  role="presentation"
                  className="sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">
                    {t("383.label")}
                    </p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="https://rayashop.hypernode.io/media/catalog/category/tv_home_theater_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">
                    {t("385.label")}
                    </p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="	https://rayashop.hypernode.io/media/catalog/category/large_appliances_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("387.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="	https://rayashop.hypernode.io/media/catalog/category/small_appliances_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("388.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="https://rayashop.hypernode.io/media/catalog/category/mobiles-_-tablets.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("500.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="		https://rayashop.hypernode.io/media/catalog/category/kitchen_appliances_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("389.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="		https://rayashop.hypernode.io/media/catalog/category/electronics_2x_2.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("390.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="		https://rayashop.hypernode.io/media/catalog/category/computers_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />

                <div className="sectionParag ">
                  <p className="sectionText ">   {t("391.label")}</p>
                </div>
              </a>
              <a
                href="/deals"
                className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative"
              >
                <img
                  src="	https://rayashop.hypernode.io/media/catalog/category/health_and_wellness_2x.png"
                  alt="Hot Deals"
                  role="presentation"
                  className=" sectionImg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"
                />
                  
                <div className="sectionParag ">
                  <p className="sectionText ">   {t("501.label")}</p>
                </div>
              </a>
            </section>
          </div>
          
          <h1 className="text_h1">{t("368.label")}</h1>
          

          <Slider className="slick-list col-10" {...settings}>
            {/* <div className="d-flex flex-wrap">           */}

            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
             
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
          </Slider>
           
        
          <div className="explore">
            <button className=" exploreButton btn btn-primary">
              <h5 className="text_h5">{t("369.label")}</h5>
            </button>
          </div>       

         
          <div className="col-12">
            <img className="cooll" src={cool} alt="" />
          </div>

          <h1 className="text_h1">{t("376.label")}</h1>
          <Slider className="slick-list col-10" {...settings}>
          <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
          </Slider>

          <div>
            <h1 className="text_h1"> {t("377.label")}</h1>
          </div>
          <Slider className="slick-list col-10" {...settings}>
          <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
           
          </Slider>
         
          <div className="col-10  md-4 col-lg-2 w-100 explore">
            <button className=" exploreButton btn btn-primary ">
              <h5 className="text_h5"> {t("378.label")}</h5>
            </button>
          </div>
        
          <div>
            <h1 className="text_h1"> {t("379.label")}</h1>
          </div>

          <div className="mainBrands col-11 ">
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="https://api-rayashop.freetls.fastly.net/media/brands/165037446574.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="https://api-rayashop.freetls.fastly.net/media/brands/1650460419922.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a " href="/deals">
              <img
                src="https://api-rayashop.freetls.fastly.net/media/brands/165037602363.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="	https://api-rayashop.freetls.fastly.net/media/brands/165037610130.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="	https://api-rayashop.freetls.fastly.net/media/brands/1650376649750.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="	https://api-rayashop.freetls.fastly.net/media/brands/1654439018933.png?width=200&format=webp"
                alt=""
                className="brands"
              />
            </a>
            <a className="text_a d-flex flex-column justify-content-center align-items-center rounded-3xs justify-center item relative" href="/deals">
              <img
                src="https://api-rayashop.freetls.fastly.net/media/brands/1650530584800.png?width=200&format=webp"
                alt=""
                className="brands "
              />
            </a>
          </div>

          <div className="downloadImg">
            <img className="_img" src={download1} alt="" />
          </div>
          <h1 className="text_h1"> {t("500.label")}</h1>
          <Slider className="slick-list col-10" {...settings}>
          <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
            <div
              className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm mb-2">
                  <MdCompare className="mx-3" size={18} />
                  {t("367.label")}
                </button>
              </div>
            </div>
           
          </Slider>
         
          <div className="explore  md-4 col-lg-2 w-100">
            <button className=" exploreButton btn btn-primary text-bold">
              <h5 className="text_h5"> {t("381.label")}</h5>
            </button>
          </div>
         
        </div>
      </>
    );
  
 }
  export default  Home ;