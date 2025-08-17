import React from "react";

export default function Product({data}){

    const { category , title, price , originalprice, image, sale } =data;
    return(
        <>
        <div className="border rounded-xl p-4 w-64 bg-white relative">
            {sale && (
                <span className=" absolute top-2 right-2 bg-red-500 text-white flex item-center justify-center text-xs px-2 py-2 w-10 h-10 rounded-full">
                    Sale
                </span>
            )}

            <img 
            className="w-full h-48 object-cover rounded"
            src={image}
             alt="product" />

             <div className=" flex flex-col justify-start items-start text-left">
             <p className="text-gray-500 text-sm mt-2">
                {category}
             </p>
             <h1 className="font-bold text-lg ">
                {title}
             </h1>
             <span className="flex flex-grow"></span>

             <div>
                <div className= "flex mt-1 mb-1">
                    <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <img className="w-5 h-5" src="https://tse3.mm.bing.net/th/id/OIP.CC4uDdkd3SVs_rQ2IIXO3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </div>
             </div>
             <div className="mt-1 ">
                {originalprice ? (
                    <>
                    <span className="text-gray-400 line-through text-xs"> 
                        {originalprice}
                    </span>
                    <span className="font-bold text-gray-700 ml-2">
                        {price}
                        </span>
                    </>
                ):
                (
                    <>
                    <span className="font-bold text-gray-700">
                        {price}
                        </span>
                        </>
                )}

             </div>
            </div>
        </div>
        </>
    )

}