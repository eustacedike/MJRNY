
// import { Link } from "react-router-dom";
// import './home.css';

import Modal from "../Home/modal";
import Hero from "../Home/hero";
import Products from "../Home/products";
import Sidebar from './sidebar';


function Shop(props) {





    return (
        <div className="Shop">
            <div class="page-holder">
      <div class="mx-3">
{/* Hero */}
                <Hero />
            <section class="py-5">
            <div class="mx-10 p-0">
            {/* <div class="row"> */}

                

                {/* SHOP SIDEBAR */}
                <Sidebar items={props.items}/>

                {/* </div> */}
                </div> 
            </section>
            </div>
            </div>
        </div>
    );
}

export default Shop;
