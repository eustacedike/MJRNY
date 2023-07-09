
// import { Link } from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

import { useRef } from 'react';
import './home.css';

import catImg1 from "../img/cat-img-1.jpg";
import catImg2 from "../img/cat-img-2.jpg";
import catImg3 from "../img/cat-img-3.jpg";
import catImg4 from "../img/cat-img-4.jpg";

const categories = [
  { title: "Clothes", image: catImg1 },
  { title: "Shoes", image: catImg2 },
  { title: "Watches", image: catImg3 },
  { title: "Electronics", image: catImg4 },
]




function Categories() {


  const oneT = useRef();

  const scrll = () => {
    oneT.current.scrollBy(240,0);
  };
  const bckscrll = () => {
    oneT.current.scrollBy(-240,0);
  };



  return (
    <div className="Categories">

      <section className="pt-5 onep">
        <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div className="big-cat" ref={oneT}>

          {categories.map(category => {
            return (
              <div className="catt"><img className="cat-img" src={category.image} alt="" /><strong className="category-item-title">{category.title}</strong>
              </div>
            )
          })}
        </div>

       
 <p className='lef' onClick={bckscrll}><FaChevronLeft /></p>
<p className='righ' onClick={scrll}><FaChevronRight /></p>
      </section>

    </div>
  );
}

export default Categories;
