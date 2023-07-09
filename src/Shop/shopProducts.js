

import { useState } from "react";

// import { Link } from "react-router-dom";
import './shop.css';

import { FaHeart, FaExpand } from 'react-icons/fa';



import Modal from "../Home/modal";




function ShopProducts(props) {



    const products = props.items;

    const [prod, setProd] = useState(0);


    return (
        <>
            <Modal price={products[prod]?.price} title={products[prod]?.title} description={products[prod]?.description} image={products[prod]?.image} />
        
        <div className="product-grid">
            {/* MODAL */}


            {/* PRODUCT */}

            {products?.map(product => {
                return (

                    <div className="">
                        <div className="product text-center">
                            <div className="mb-3 position-relative">
                                <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className=" det-img" src={product.image} alt="..." /></a>
                                <div className="product-overlay">
                                    <ul className="mb-0 list-inline">
                                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><FaHeart /></a></li>
                                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                                        <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal" onClick={() => setProd(products.indexOf(product))}><FaExpand /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h6> <a className="reset-anchor" href="detail.html">{product.title}</a></h6>
                            <p className="small">${product.price}</p>
                        </div>
                    </div>



                )
            })}





        </div>
        </>

    );
}

export default ShopProducts;