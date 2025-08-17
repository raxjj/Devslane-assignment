import React from 'react'
import './App.css'
import Page from './page'
import Assignmnet from './assignmnets'
import { Route, Routes, Link} from 'react-router-dom';
import Productdata from './productdata';


function App() {

  
  return (
    <>
        <Productdata/>
        <Routes>
          <Route path='/' element ={<Productdata/>}></Route>
        </Routes>
    </>
  )
}

export default App
