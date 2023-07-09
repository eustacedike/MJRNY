

import './layout.css';
import { Link, useLocation } from 'react-router-dom';



import { useRef, useState } from 'react';


function Header() {

    const navbar = useRef();

    const [menu, setMenu] = useState(false);

    // const location = useLocation();

    return (
        <div  className="Header"       >

{/* navbar */}
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand ms-auto me-auto" href="index.html"><span className="fw-bold text-uppercase text-dark">MJRNY 🕊️💎</span></a>
            <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  {/* Link */}<a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  {/* Link */}<Link className="nav-link" to='products'>Products</Link>
                </li>
                <li className="nav-item">
                  {/* Link */}<a className="nav-link" href="cart.html">Cart</a>
                </li>
                <li className="nav-item dropdown d-none"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="#">Category</a><a className="dropdown-item border-0 transition-link" href="#">Product detail</a><a className="dropdown-item border-0 transition-link" href="#">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">               
                <li className="nav-item d-none"><a className="nav-link" href="#"> <i className="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small className="text-gray fw-normal">(2)</small></a></li>
                <li className="nav-item d-none"><a className="nav-link" href="#!"> <i className="far fa-heart me-1"></i><small className="text-gray fw-normal"> (0)</small></a></li>
                <li className="nav-item d-none"><a className="nav-link" href="#!"> <i className="fas fa-user me-1 text-gray fw-normal"></i>Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
            
        </div>
    );
}

export default Header;
