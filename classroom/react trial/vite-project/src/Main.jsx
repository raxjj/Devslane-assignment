import React, { useState } from "react";
import Product from "./Product.jsx";
import Dropdown from "./Dropdown.jsx";
import Page from "./Pagechanger.jsx";
import Search from "./Search.jsx";

const products = [
  {
    category: "Mugs",
    title: "Black Printed Coffee Mug",
    price: "15.00",
    image: "https://m.media-amazon.com/images/I/41yBpNBTufL.jpg",
  },
  {
    category: "Mugs",
    title: "Father’s Day Coffee Mug",
    price: "19.00",
    image: "https://th.bing.com/th/id/OIP.uuXBo469_RSkvtTECvM8BwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: "34.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/GE/HB/PM/156224526/men-poly-cotton-green-printed-t-shirt-1000x1000.jpg",
  },
  {
    category: "Mugs",
    title: "Personalised Mug",
    price: "15.00",
    image: "https://i.pinimg.com/originals/a7/2b/4a/a72b4a5069cffab347c92c9df60e2798.jpg",
  },
  {
    category: "Tshirts",
    title: "Printed Brown Tshirt",
    price: "25.00",
    originalPrice: "34.00",
    image: "https://tse2.mm.bing.net/th/id/OIP.gVqhXyhunpISoiMtyk3DngHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Printed Dark Blue Tshirt",
    price: "34.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/323333541/VX/NE/QT/188656476/cotton-tshirt-teal-blue-colour-500x500.jpeg",
  },
  {
    category: "Tshirts",
    title: "Printed Green Tshirt",
    price: "28.00",
    originalPrice: "35.00",
    image: "https://images.bewakoof.com/original/men-s-green-graphic-printed-oversized-t-shirt-542359-1663156416-1.jpg",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Printed Tshirt Coffee Black Color",
    price: "25.00",
    originalPrice: "35.00",
    image: "https://tse3.mm.bing.net/th/id/OIP.tPUSGV9vv4-4gH9qBAI3nwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Typography Teal Printed Tshirt",
    price: "22.00",
    originalPrice: "30.00",
    image: "https://masterbundles.com/wp-content/uploads/2023/11/mbb1-212.jpg",
    sale: true,
  },
];

export default function Main() {
  return (
    <div className="max-w-6xl mx-auto py-20 ">
      <div className="flex justify-center items-center bg-gray-100 py-20 rounded-xl">
        <div className="flex flex-col gap-5 w-full px-28">
          {/* <div className="w-full flex justify-center">
            <Search />
          </div> */}

          <div className="w-full flex justify-end mb-4">
            <Dropdown />
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <Product data={products[0]} />
            <Product data={products[1]} />
            <Product data={products[2]} />
            <Product data={products[3]} />
            <Product data={products[4]} />
            <Product data={products[5]} />
            <Product data={products[6]} />
            <Product data={products[7]} />
            <Product data={products[8]} />
          </div>

          <div>
            <Page />
          </div>
        </div>
      </div>
    </div>
  );
}
