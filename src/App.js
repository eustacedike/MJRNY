import logo from './logo.svg';
import './App.css';

import Layout from './Layout/layout';
import Home from './Home/home';
import Shop from './Shop/shop';
import Details from './Details/details';

import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";


import products from "./products.json";

import product1 from "./img/product-1.jpg";
import product2 from "./img/product-2.jpg";
import product3 from "./img/product-3.jpg";
import product4 from "./img/product-4.jpg";
import product5 from "./img/product-5.jpg";
import product6 from "./img/product-6.jpg";
import product7 from "./img/product-7.jpg";
import product8 from "./img/product-8.jpg";


const imgs = [product1, product2, product3, product4, product5, product6, product7, product8]

const items = products.products;
;
// console.log(items);


items.map(item =>
  item.image = imgs[items.indexOf(item)]
)

function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}
      {/* <Layout/> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home items={items}/>} />
            <Route path="products" element={<Shop items={items}/>} />
            <Route path="details" element={<Details/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
