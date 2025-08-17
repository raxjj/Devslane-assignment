// import { StrictMode } from "react";
// import {  createRoot} from "react-dom/client";
// import "./index.css";
// import ReactDOM from "react-dom/client";
// // Then use ReactDOM.createRoot(...)

// import App from "./App.jsx";
// import {BrowserRouter} from 'react-router-dom'

// ReactDom.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
    
//   </StrictMode>
// );


import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
