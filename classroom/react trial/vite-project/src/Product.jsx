import React from "react";

export default function Product({data}) {

  const { category, title, price, originalPrice, image, sale } = data;
  return (
    <div className="border rounded-lg p-4 w-64  bg-white relative transform transition duration-300 hover:-translate-y-2 ">
      {sale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white flex items-center justify-center text-xs px-2 py-1 w-10 h-10 rounded-full">
          Sale
        </span>
      )}
      <img
        src={image}
        alt="Product"
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-gray-500 text-sm mt-2">{category}</p>
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="flex flex-grow"></span>
      <div>
        <div className="flex mt-1 mb-1">
          <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
      </div>
      <div className="mt-1">
        {originalPrice ? (
          <>
            <span className="text-gray-500 line-through text-sm">
              ${originalPrice}
            </span>
            <span className="ml-2 text-gray-800 font-bold">${price}</span>
          </>
        ) : (
          <span className="text-gray-800 font-bold">${price}</span>
        )}
      </div>
      
    </div>
  );
}
