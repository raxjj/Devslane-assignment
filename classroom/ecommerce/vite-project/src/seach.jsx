import React  from "react";

export default function Search(searchchange){

    

function handlechange(event){
    searchchange(event.target.value)

}

    return(<>
    
    <div>
        <input 
        type="text"
        placeholder="Search"
        className="bg-white border-gray-700 border rounded-lg mb-4"
        onChange={handlechange}

        />
    </div>
    
    
    </>)
}