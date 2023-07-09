
// import { Link } from "react-router-dom";
import './home.css';
import { useState, useRef } from "react";

import { Carousel } from "react-bootstrap";
import {FaHeart, FaExpand, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

import Modal from "./modal";


import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";
import product4 from "../img/product-4.jpg";
import product5 from "../img/product-5.jpg";
import product6 from "../img/product-6.jpg";
import product7 from "../img/product-7.jpg";
import product8 from "../img/product-8.jpg";




// [
//   {
//     title: "Kui Ye Chen’s AirPods",
//     image: product1,
//     condition: "New",
//     price: 250,
//     quantity: 13,
//     category: "Electronics",
//     subCategory: "Airpod",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Air Jordan 12 gym red",
//     image: product2,
//     condition: "New",
//     price: 300,
//     quantity: 13,
//     category: "Shoes",
//     subCategory: "Sneakers",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Cyan cotton t-shirt",
//     image: product3,
//     condition: "New",
//     price: 250,
//     quantity: 13,
//     category: "Clothes",
//     subCategory: "Shirt",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Timex Unisex Originals",
//     image: product4,
//     condition: "New",
//     price: 351,
//     quantity: 3,
//     category: "Electronics",
//     subCategory: "Wrist Watch",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Red digital smartwatch",
//     image: product5,
//     condition: "New",
//     price: 250,
//     quantity: 0,
//     category: "Electronics",
//     subCategory: "Wrist Watch",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },


//   {
//     title: "Nike air max 95",
//     image: product6,
//     condition: "New",
//     price: 300,
//     quantity: 0,
//     category: "Shoes",
//     subCategory: "Sneakers",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Nike air max 95",
//     image: product7,
//     condition: "New",
//     price: 25,
//     quantity: 0,
//     category: "Body",
//     subCategory: "Perfume",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

//   {
//     title: "Apple Watch",
//     image: product8,
//     condition: "New",
//     price: 350,
//     quantity: 13,
//     category: "Electronics",
//     subCategory: "Wrist Watch",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
//     colors: ["red", "blue"],
//     sizes: ["4XL", "XXXL", "XXL", "XL", "L", "M", "S"]
//   },

// ];


function Products(props) {



  const [prod, setProd] = useState(0);

  const oneT = useRef();

  const scrll = () => {
    oneT.current.scrollBy(240,0);
  };
  const bckscrll = () => {
    oneT.current.scrollBy(-240,0);
  };

  const products = props.items;


  return (
    <div className="Products">

      {/* MODAL */}
      <Modal price={products[prod].price} title={products[prod].title} description={products[prod].description} image={products[prod].image} />

      <section className="py-5 onep">
        <header>
          <p className="small text-muted small text-uppercase mb-1">{props.para}</p>
          <h2 className="h5 text-uppercase mb-4">{props.h2}</h2>
        </header>
        <div className="d-flex overflow-scroll onet" ref={oneT}>
          {/* PRODUCT */}

          {/* <Carousel> */}
      
   
   


          {products.map(product => {
            return (
              // <Carousel.Item>
                <div className="col-xl-3 col-lg-4 col-sm-6" id="products">
                <div className="product text-center">
                  <div className="position-relative mb-3">
                    <div className= {product.quantity===0? "badge text-white bg-danger" : "badge text-white bg-info"}>{product.quantity===0? "SOLD" : "NEW"}</div><a className="d-block" href="#"><img className="img-fluid w-100" src={product.image} alt="..." /></a>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><FaHeart/></a></li>
                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                        <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal" onClick={() => setProd(products.indexOf(product))}><FaExpand/></a></li>
                      </ul>
                    </div>
                  </div>
                  <h6> <a className="reset-anchor" href="#">{product.title}</a></h6>
                  <p className="small text-muted">${product.price}</p>
                </div>
              </div>
              // </Carousel.Item>
            )
          })}
         {/* </Carousel>   */}
       
        </div>

 <p className='lef' onClick={bckscrll}><FaChevronLeft /></p>
<p className='righ' onClick={scrll}><FaChevronRight /></p>


 
      </section>

    </div>
  );
}

export default Products;
