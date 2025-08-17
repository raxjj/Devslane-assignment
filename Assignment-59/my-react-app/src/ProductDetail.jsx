import React from "react";
import { useParams } from "react-router-dom";
import Products from "./Dummydata";
import products from "./Dummydata";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";


function ProductDetail() {
  const params = useParams();
  const sku = params.sku;
  products;



    let alldata;
    for(let i = 0 ; i<products.length; i++){
      const p = products[i];
      if(sku==p.sku){
        alldata=p;
        break;

      }

    }

console.log(sku, params);
console.log('product found', alldata);




    return (
      <>
          <Link
  className="mt-3 text-blue-500   ml-10 font-bold hover:text-gray-200 text-xl inline-flex items-center"
  to="/"
>
  <IoChevronBackCircle className="mr-3" size={30} />
 
</Link>
<div className="mt-10 border-2 ml-10 mr-10 bg-gray-200 p-10 ">
    <div className="flex gap-4 py-4 px-6 items-start">
      <img
        className="w-80 h-auto object-contain rounded-sm"
        src={alldata.image}
        alt="Product"
      />

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-gray-800">
         {alldata.title}
        </h1>

        <p className="text-xl font-medium text-gray-700">$15.00</p>

        <p className="text-gray-600  leading-relaxed text-lg">
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          Numquam eius modi tempora incidunt lores ta porro ame.
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
    </div>



    </>
  );
}

export default ProductDetail;
