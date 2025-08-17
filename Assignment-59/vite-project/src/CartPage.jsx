import React from "react";
import CartList from "./CartList";
import products from "./DummyData";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


export default function CartPage() {
  return (
    <div className="p-10 bg-gray-200 min-h-screen mx-auto">
      <div className="bg-blue-200 p-20 relative">
        <Link to="/">
          <IoMdArrowBack className="absolute top-1 left-1 text-2xl" />
        </Link>
        <div className="flex flex-col gap-8">
          <div className="col-span-2">
            <CartList />
          </div>

          <div className="border border-gray-300 p-4 h-fit w-full max-w-xl self-end font-serif bg-gray-700">
            <h2 className="text-lg  text-white font-semibold mb-4">Cart totals</h2>
            <div className="flex justify-between py-2 border-b text-gray-200">
              <span>Subtotal</span>
              <span className="font-semibold">$120</span>
            </div>
            <div className="flex justify-between py-2 mb-4 text-gray-200">
              <span>Total</span>
              <span className="font-semibold ">$120</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
