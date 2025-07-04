import React from "react";

export default function Dropdown() {
  return (
    <select
      className="border px-4 py-1 rounded text-sm text-gray-500"
    >
      <option value="default" >Default Sort</option>
      <option value="title">Sort by title</option>
      <option value="lowHigh">Sort by price: low to high</option>
      <option value="highLow">Sort by price: high to low</option>
    </select>
  );
}
