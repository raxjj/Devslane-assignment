import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import products from "./DummyData";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { dataFromAPI } from "./dataFromAPI";
import Product from "./Product";
import { FaHome } from 'react-icons/fa'

function  ProductDetail() {
  const params=useParams();
  const id=params.id;

  let item;

  if(!dataFromAPI||dataFromAPI===0){
    return(
      <div>
         <div className="p-4 flex justify-center items-center h-80">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-red-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <div className="text-gray-700 font-semibold">Loading product details...</div>
        </div>
      </div>
      </div>
    )
  }
  let currentindex=-1;



  for (let index = 0; index < dataFromAPI.length; index++) {
    const pro=dataFromAPI[index];
    if(String(id)==String(pro.id)){
      item=pro;
      currentindex=index;
      break;
    }
    
  }

let prevProduct=null;
let nextProduct=null;

if(currentindex>0){
  prevProduct=dataFromAPI[currentindex-1].id;

}
if(currentindex<dataFromAPI.length-1 &&currentindex!==-1){
  nextProduct=dataFromAPI[currentindex+1].id;
}

  console.log("item is ", item);
  // if(!item){
  //   return (<div>
  //               <Link to="/">
  //                     <IoMdArrowBack className="text-2xl"/>

  //               </Link>
  //               <div>
  //                 product not found
  //               </div>
  //           </div>)
  // }
  

  return (
    item?(

    <div className="p-4 ">
      
     
      <div className="flex gap-4 p-10 items-start">
        <img
          className="w-80 h-auto object-contain rounded-sm"
          src={item.thumbnail}
          alt="Product"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-gray-800">{item.title}</h1>

          <p className="text-lg font-medium text-gray-700">${item.price}</p>

          <p className="text-gray-600 max-w-xl leading-relaxed">
           {item.description}
          </p>

          <div className="py-2 flex items-center gap-3">
            <input
              type="number"
              value="1"
              className="w-14 border border-gray-300 rounded px-2 py-1 text-center"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between ">

       <Link to={`/product/${prevProduct}`}>
        <IoMdArrowBack className="text-2xl" />Previous
      </Link>

      <Link to="/">
        <FaHome className="text-4xl " />
      </Link>

       <Link to={`/product/${nextProduct}`}>
        <IoMdArrowForward className="text-2xl " />Next
      </Link>
      </div>
    </div>
    ):(<>
    <div className="bg-gray-500 h-screen py-10">
      <div className="mb-10">
          <h1 className="text-2xl text-center font-semibold mt-10 ">No matching Product found🤧</h1>
          <h2 className="text-2xl text-center">Move to homePage for new  products </h2>
          <Link to="/" className=" p-3 mt-10 mb-10 flex justify-center items-center">
           <FaHome className="text-3xl hover:text-white"/></Link>
      </div>
      </div></>)
  )
}

export default ProductDetail;

