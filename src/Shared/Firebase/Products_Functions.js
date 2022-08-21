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
    const datas = await getDocs(collection(db, `Category/${mainCategory.main_id}/${mainCategory.main_category}`))
    
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

// ----------------------------------------------------------------

export const getchildbadge = async (subCategory) => {
    const datas = await getDocs(collection(db, `Category/${subCategory.main_id}/${subCategory.main_category}/${subCategory.sub_id}/${subCategory.sub_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), child_id: docs.id})
        ))
    )
};


// export const createUser = async () => {
//     await addDoc(collection(db, "Category/tTnmTpmIY4xzZbPku1dp/Mobiles & Tablets/ZNetmXB7U6KBZpmmtsAu/Tablet/vy42Xha7PQgBLUARRuYr/Lenovo Tablets"), x);
//   };


  

// const x = {
//     img: "https://firebasestorage.googleapis.com/v0/b/rayashop-test1-d4f6b.appspot.com/o/Tablet%20Lenovo%2Fipad.jpeg?alt=media&token=c05dbd21-2b2d-43cf-a5f2-cf41bb404e57",
//     name: "Apple iPad Pro 11, 11Inch, 1TB, 16GB RAM, 4G LTE, Space Grey",
//     qty: 123,
//     price: 13445,
//     discount : 15,
//     specifications: [
//         {name:"Display Type", value:"Liquid Retina"},
//         {name:"Display Size In Inches", value:"11 Inches"},
//         {name:"Display Resolution In Pixels", value:"1668 x 2388 pixels (~265 ppi density)"},
//         {name:"Touch Screen", value:"Yes"},
//         {name:"Processor CPU", value:"Octa-core"},
//         {name:"Processor Chipset", value:"Qualcomm SM8350 Snapdragon 888 5G (5 nm)"},
//         {name:"Operating System", value:"Android"},
//         {name:"Operating System Version", value:"Android 11, One UI 3.5"},
//         {name:"Internal Memory GB", value:"128 GB"},
//         {name:"Memory RAM In GB", value:"4 GB"},
//         {name:"Front Camera", value:"12 MP"},
//         {name:"Rear Camera", value:"48 MP + 12 MP"},
//         {name:"Video Recording", value:"4K@24/25/30/60fps, 1080p@25/30/60/120/240fps; gyro-EIS"},
//         {name:"SIM Card", value:"Single SIM"},
//         {name:"Network Type", value:"2G, 3G, 4G, 5G"},
//         {name:"Battery Capacity In mAh", value:3240},
//         {name:"Weight In Gram", value:174},
//         {name:"WiFi", value:"Yes"},
//         {name:"Bluetooth", value:"Yes"},
//         {name:"Product Color", value:"Grey"},
//         {name:"Model", value:"Apple iPad Pro 11"},
//         {name:"SKU", value:"190199655607-Lio"},
//     ]
    
// }

//     {
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