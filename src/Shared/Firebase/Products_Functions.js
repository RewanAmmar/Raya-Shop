import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../../src/Firebase Configration/Firebase'
import { addDoc, collection, doc, getDoc, getDocs, limit, query, setDoc, where } from 'firebase/firestore';




export const getCategory = async () => {
    const data = await getDocs(collection(db, "Category"));

    return (
        (data.docs.map((doc) => ({ ...doc.data(), main_id: doc.id })
        ))
    )
};

export const getallmaincategory = async (mainCategory) => {
    const datas = await getDocs(collection(db, `Category/${mainCategory.main_id}/${mainCategory.main_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), sub_id: docs.id, ...mainCategory })
        ))
    )
};



export const getallsubcategory = async (subCategory) => {
    const datas = await getDocs(collection(db, `Category/${subCategory.main_id}/${subCategory.main_category}/${subCategory.sub_id}/${subCategory.sub_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), child_id: docs.id, ...subCategory })
        ))
    )
};

export const getallchildcategory = async (category_path) => {
    const datas = await getDocs(collection(db, `Category/${category_path.main_id}/${category_path.main_category}/${category_path.sub_id}/${category_path.sub_category}/${category_path.child_id}/${category_path.child_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), prd_id: docs.id, category_path })
        ))
    )
};




// export const createUser = async () => {
//     await addDoc(collection(db, "Category/tTnmTpmIY4xzZbPku1dp/Mobiles & Tablets/LpjIZ9tMZfoyfn1SGJvL/Mobiles/dNDkPMImE9mAIjonTQlV/Mobile Apple"), x);
//   };


  

// const x = {
//     img: "",
//     name: "Apple iPhone XR, 64GB, 3GB RAM, 4G LTE, Blue",
//     qty: 34,
//     price: 12445,
//     specifications: {
//         Battery_Capacity_In_mAh: 3240,
//         Bluetooth: true,
//         Display_Resolution_In_Pixels: "828×1792",
//         Display_Size_In_Inches: "6.1 Inches",
//         Display_Type: "Liquid Retina",
//         Front_Camera: "12 MP",
//         Internal_Memory_GB: "64 GB",
//         Memory_RAM_In_GB: "3 GB",
//         Network_Type: "2G, 3G, 4G, 5G",
//         Operating_System: "iOS",
//         Operating_System_Version: "iOS 12",
//         Processor_CPU: "Hexa-core",
//         Processor_Chipset: "Apple A15 Bionic (5 nm)",
//         Product_Color: "black",
//         Rear_Camera: "12 MP + 12 MP",
//         SIM_Card: "Single SIM",
//         SKU: "Ip13-128-balck-dreamstores",
//         Touch_Screen: true,
//         Video_Recording: "Dual-LED dual-tone flash, HDR (photo/panorama)",
//         Weight_In_Gram: 134,
//         WiFi: true
// }
// }