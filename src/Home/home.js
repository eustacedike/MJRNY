


// import { Link } from "react-router-dom";
// import './home.css';
import Hero from "./hero";
import Categories from "./categories";
import Products from "./products";
import Services from "./services";
import Newsletter from "./newsletter";



function Home(props) {


const clothes = props.items.filter(a => { return a.category === "Clothes" });
const shoes = props.items.filter(a => { return a.category === "Shoes" });
const electronics = props.items.filter(a => { return a.category === "Electronics" });
const bodys = props.items.filter(a => { return a.category === "Body" });
console.log(clothes);



  return (
    <div className="Home">




      {/* HERO SECTION */}
      <Hero/>
<br/>
<br/>
      {/* CATEGORIES SECTION */}
      <Categories/>
      
      {/* TRENDING PRODUCTS */}
      <Products h2="New Arrivals 🔥" para="Made the hard way" items={props.items.slice(0,15)}/>
      <Products h2="Clothes 🔥" para="Made the hard way" items={clothes}/>
      <Products h2="Shoes 🔥" para="Made the hard way" items={shoes}/>
      <Products h2="Electronics 🔥" para="Made the hard way" items={electronics}/>
      <Products h2="Body 🔥" para="Made the hard way" items={bodys}/>
      
      {/* SERVICES */}
      <Services/>
      
      {/* NEWSLETTER */}
      <Newsletter/>
      
    </div>
      
  
  );
}

export default Home;
