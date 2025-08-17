import { StrictMode, useState } from 'react'

import './index.css'
import App from './App.jsx'
import React from 'react'

import Product from './Product.jsx'
import PageChange from './pageChange.jsx'

let product =[
  {
    category:"mugs",
    title:"Black Printed Coffee Mug",
   price: "$15.00",
    image: "https://m.media-amazon.com/images/I/41yBpNBTufL.jpg",
  },
  {
    category: "Mugs",
    title: "Father’s Day Coffee Mug",
    price: "$19.00",
    image: "https://th.bing.com/th/id/OIP.uuXBo469_RSkvtTECvM8BwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: "$34.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/GE/HB/PM/156224526/men-poly-cotton-green-printed-t-shirt-1000x1000.jpg",
  },
  {
    category: "Mugs",
    title: "Personalised Mug",
    price: "$15.00",
    image: "https://i.pinimg.com/originals/a7/2b/4a/a72b4a5069cffab347c92c9df60e2798.jpg",
  },
  {
    category: "Tshirts",
    title: "Printed Brown Tshirt",
    price: "$25.00",
    originalprice: "$34.00",
    image: "https://tse2.mm.bing.net/th/id/OIP.gVqhXyhunpISoiMtyk3DngHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Printed Dark Blue Tshirt",
    price: "$34.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/323333541/VX/NE/QT/188656476/cotton-tshirt-teal-blue-colour-500x500.jpeg",
  },
  {
    category: "Tshirts",
    title: "Printed Green Tshirt",
    price: "$28.00",
    originalprice: "$35.00",
    image: "https://images.bewakoof.com/original/men-s-green-graphic-printed-oversized-t-shirt-542359-1663156416-1.jpg",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "TPrinted Tshirt Coffee Black Color",
    price: "$25.00",
    originalprice: "$35.00",
    image: "https://tse3.mm.bing.net/th/id/OIP.tPUSGV9vv4-4gH9qBAI3nwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Typography Printed Tshirt",
    price: "$22.00",
    originalprice: "$30.00",
    image: "https://masterbundles.com/wp-content/uploads/2023/11/mbb1-212.jpg",
    sale: true
  },
];



export default function Main(){

  // console.log("component is running")

  const [query, setQuery] = useState('')
  // const [data , setData] =useState(product)
  let data = product
  const [sort, setSort]=useState("default")
  //alternate methord

    data =product.filter(function(item){
  return item.title.toLowerCase().indexOf(query.toLowerCase())!= -1

   })


  function handlechange(event){
  // const newquery = event.target.value;
  //  const newdata =product.filter(function(item){
  //   return item.title.toLowerCase().indexOf(newquery.toLowerCase())!= -1

  setQuery(event.target.value)
  // setData(newdata);
  
}

function handlesort(event){
  setSort(event.target.value)

}

if(sort=='LowToHigh'){
  data.sort(function(x,y){
    return parseFloat(x.price.replace('$', ''))- parseFloat(y.price.replace("$",""));
    
  });
}
else if(sort== "HighToLow"){
  data.sort(function(x,y){
    return parseFloat(y.price.replace("$","")- parseFloat(x.price.replace("$","")))
  })
}
else if(sort == "Name"){
 data.sort(function(x,y){

  if(x.title.toLowerCase() < y.title.toLowerCase)return -1
  if(x.title.toLowerCase>y.title.toLowerCase)return 1;
  return 0;

 })
}



  return(
    <>
    <div className='  px-20 border  bg-gray-200  '>
{/* searching product  */}

    <input type="text"
    value={query}
    placeholder='   Search Product...'
    className='border-gray-300 rounded-md border  mb-5 mt-10 w-[400px] py-2'
    onChange={handlechange} />

{/* sorting product  */}
<select onChange={handlesort}
value={sort}
className='border border-gray-300 rounded-md ml-5 text-sm' >
  <option value="default" >Default Sort</option>
  <option value="Name">Sort by Name</option>
  <option value="LowToHigh">Low to High</option>
  <option value="HighToLow">High to Low</option>
</select>
    
   
    <div className="flex flex-wrap justify-center gap-10">
        {data.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
   
   
    {/* <div className='flex flex-wrap justify-center gap-10'>
      <Product  data={product[0]}/>
      <Product data={product[1]}/>
      <Product data={product[2]}/>
      <Product data={product[3]}/>
      <Product data={product[4]}/>
      <Product data={product[5]}/>
      <Product data={product[6]}/>
      <Product data={product[7]}/>
      <Product data={product[8]}/>

    </div> */}
    <PageChange/>
    </div>
    </>
  )


}


const a = {name:"suresh", hometown:"bindki"}
const b = {email:"a@.com", ...a}
console.log(b)



