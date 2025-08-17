import React from "react";
import ProductListPage from "./ProductListPage";
import AssignmentPage from "./AssignmentPage";
import LecturePage from "./LecturePage";
import Sidebar from "./Sidebar";
import { Routes,Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartPage from "./Cartpage";

export default function App() {
  const path=window.location.pathname
  return (
    <div>
      <Routes>
        <Route index element={<ProductListPage/>}></Route>
        <Route path="/products/:sku" element={<ProductDetail/>}></Route>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}
