import React from "react";
import CartRow from "./CartRow";
import products from "./DummyData";
import { dataFromAPI } from "./dataFromAPI";

export default function CartList() {
  const item1 = dataFromAPI.find(function (p) {
    return p.id === 1;
  });

  const item2 = dataFromAPI.find(function (p) {
    return p.id === 2;
  });

  return (
    <table className="w-full border text-sm text-left font-serif ">
      <thead>
        <tr className="bg-gray-700">
          <th className="p-4 text-center"></th>
          <th className="p-4 text-white">Product</th>
          <th className="p-4 text-white text-center ">Price</th>
          <th className="p-4 text-white text-center">Quantity</th>
          <th className="p-4 text-white text-center">Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <CartRow item={item1} quantity={2} />
        <CartRow item={item2} quantity={5} />
      </tbody>

      <tfoot className="bg-gray-700">
        <tr>
          <td colSpan="5">
            <div className="flex items-center gap-3 mt-6 px-4 pb-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-4 py-2 rounded w-44"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                APPLY COUPON
              </button>
              <button
                className="bg-gray-300 font-bold text-blue-700 px-6 py-2 rounded ml-auto hover:bg-blue-700 hover:text-gray-300"
                disabled
              >
                UPDATE CART
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
