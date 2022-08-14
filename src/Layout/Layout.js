import React, { useEffect, useState } from 'react'
import SideFilter from '../SideFilter/SideFilter';
import Footer from './../Footer/Footer';
import Product_Component from '../Shared/Product_Component/Product_Component';
import { createUser, getallchildcategory, getallmaincategory, getallsubcategory, getCategory } from '../Shared/Firebase/Products_Functions';
import Component_Header from '../Shared/Component_Header/Component_Header';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase Configration/Firebase';
import Navbar from './../Navbar/navbar';



export default function Layout() {

    const [mainCategory, setMainCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [childCategory, setChildCategory] = useState([])
    const [prd, setPrd] = useState([])
    const [header, setHeader] = useState([])
    const [headerBadge, setHeaderBadge] = useState([])

    function getMainCat(element) {
        getallmaincategory(element).then(function (res) {
            setSubCategory(res)
            setHeader(element.main_category)
            setHeaderBadge(res)
        })
    }

    function getSubCat(element) {
         
        getallsubcategory(element).then(function (res) {
            setChildCategory(res)
            setHeader(element.sub_category)
            setHeaderBadge(res)

        })
    }


    function getChildCat(element) {
        
        getallchildcategory(element).then(function (res) {
            setPrd(res)
            setHeader(element.child_category)
        })
    }

    

    useEffect(() => {

         getCategory().then(function (res) {
            setMainCategory(res)
        })

        

    }, [mainCategory]);



    

    return (
        <>

            <div className='container-fulid'>
                <div className='row p-0 m-0'>
                    <div className='d-flex flex-column'>
                        <div className='col-12'>

                            {mainCategory.map(ele => {
                                return (<a className='badge bg-warning p-3' key={ele.main_id} onClick={() => getMainCat(ele)}>{ele.main_category}</a>)
                            })}
                            <br />
                            {subCategory.map(ele => {
                                return (<a className='badge bg-danger p-3' key={ele.sub_id} onClick={() => getSubCat(ele)}>{ele.sub_category}</a>)
                            })}
                            <br />
                            {childCategory.map(ele => {
                                return (<a className='badge bg-info p-3' key={ele.child_id} onClick={() => getChildCat(ele)}>{ele.child_category}</a>)
                            })}
                            <Navbar mainCat={mainCategory}/>
                        </div>

                        <div>
                            <Component_Header subCategory={headerBadge} header={header} />
                        </div>

                        <div className='container col-12 d-flex'>
                            <div className='col-md-2 d-md-block d-none'>
                                <SideFilter />
                            </div>
                            <div className='col-10'>
                                <Product_Component prd={prd} />
                            </div>
                        </div>
                        <div>
                            <Footer />
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
