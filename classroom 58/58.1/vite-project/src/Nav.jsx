import React from 'react'

export default function Nav({photo}){

    return (
        <>
        <div className="  mb-4 mt-0" >
            <img className = " rounded-full ml-2 h-20 w-30" src={photo} alt="" />

        </div>
        </>
    )
}