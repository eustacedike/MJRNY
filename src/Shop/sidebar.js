



import { useState } from "react";

// import { Link } from "react-router-dom";
// import './home.css';

// import PaginatedItems from "./shopProducts";
import ShopProducts from "./shopProducts";
import Pagination from "./pagination";


function Sidebar(props) {




    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(9);
    const [items, setItems] = useState(props.items);
    const [catActive, setCatActive] = useState("");
    const [subCatActive, setSubCatActive] = useState("");

    const setCat = (a) => {
        setItems(props.items.filter(filtered => { return filtered.category === a }));
        setCatActive(a);
    }
    const setSubCat = (b, c) => {
        setItems(props.items.filter(filtered => { return filtered.subCategory === c }))
        setCatActive(b);
        setSubCatActive(c);
    }

    const [minChoice, setMinChoice] = useState(0);
    const [maxChoice, setMaxChoice] = useState(100000000);

    const priceFilter = (d,e) => {
        setItems(items.filter(filtered => { return filtered.price > d && filtered.price < e }));
    }


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = items.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(items.length / recordsPerPage)


    // const sorted = Object.keys(props.items)
    // .sort()
    // .reduce(function (acc, key) {
    //   acc[key] = props.items[key];
    //   return acc;
    // }, {});
    // console.log(sorted);


    return (
        <div className="row">





            <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>


                <div className={catActive === "Clothes" ? "py-2 px-4 bg-dark text-white mb-3" : "py-2 px-4 bg-light mb-3"}
                    onClick={() => { setCat("Clothes") }}>
                    <strong className="small text-uppercase fw-bold">Clothes &amp; Acc</strong>
                </div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className={subCatActive === "T-Shirt" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Clothes", "T-Shirt") }}>
                        <p className="reset-anchor" href="#!">T-Shirts</p>
                    </li>
                    <li className={subCatActive === "Shirt" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Clothes", "Shirt") }}>
                        <p className="reset-anchor" href="#!">Shirts</p>
                    </li>
                    <li className={subCatActive === "Trouser" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Clothes", "Trouser") }}>
                        <p className="reset-anchor" href="#!">Trousers</p>
                    </li>
                    <li className={subCatActive === "Gown" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Clothes", "Gown") }}>
                        <p className="reset-anchor" href="#!">Gowns</p>
                    </li>
                    <li className={subCatActive === "Jacket" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Clothes", "Jacket") }}>
                        <p className="reset-anchor" href="#!">Jackets</p>
                    </li>
                </ul>

                <div className={catActive === "Electronics" ? "py-2 px-4 bg-dark text-white mb-3" : "py-2 px-4 bg-light mb-3"}
                    onClick={() => { setCat("Electronics") }}>
                    <strong className="small text-uppercase fw-bold">Electronics</strong>
                </div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className={subCatActive === "Wrist Watch" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Electronics", "Wrist Watch") }}>
                        <p className="reset-anchor" href="#!">Wrist Watches</p>
                    </li>
                    <li className={subCatActive === "Earpod" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Electronics", "Earpod") }}>
                        <p className="reset-anchor" href="#!">Earpods</p>
                    </li>
                    <li className={subCatActive === "Headphone" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Electronics", "Headphone") }}>
                        <p className="reset-anchor" href="#!">Headphones</p>
                    </li>
                    <li className={subCatActive === "Speaker" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Electronics", "Speaker") }}>
                        <p className="reset-anchor" href="#!">Speakers</p>
                    </li>
                </ul>

                <div className={catActive === "Health and Beauty" ? "py-2 px-4 bg-dark text-white mb-3" : "py-2 px-4 bg-light mb-3"}
                    onClick={() => { setCat("Health and Beauty") }}>
                    <strong className="small text-uppercase fw-bold">Health &amp; Beauty</strong>
                </div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                <li className={subCatActive === "Perfume" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Health and Beauty", "Perfume") }}>
                        <p className="reset-anchor" href="#!">Perfumes</p>
                    </li>
                <li className={subCatActive === "Body Spray" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Health and Beauty", "Body Spray") }}>
                        <p className="reset-anchor" href="#!">Body Spray</p>
                    </li>
                <li className={subCatActive === "Cream" ? "mb-2 px-1 bg-secondary text-white" : "mb-2 px-1"}
                        onClick={() => { setSubCat("Health and Beauty", "Cream") }}>
                        <p className="reset-anchor" href="#!">Cream</p>
                    </li>
                </ul>
<br/> <br/>

                <h6 className="text-uppercase mb-1" onClick={()=>priceFilter(15, 150)}>Price range</h6>
                <div className="price-range pt-4 mb-5">
                    {/* <div id="range">

                    </div> */}
                    <div className="row pt-2">
                        <div className="col-6"><strong className="small fw-bold text-uppercase">From</strong></div>
                        <input type="number" value={minChoice} onChange={(e)=>setMinChoice(e.target.value)}/>
                        <div className="col-6"><strong className="small fw-bold text-uppercase">To</strong></div>
                        <input type="number" value={maxChoice} onChange={(e)=>setMaxChoice(e.target.value)}/>
                        <button className="btn btn-dark border-0 mt-2" onClick={()=>priceFilter(minChoice, maxChoice)}>SET</button>
                    </div>
                </div>
                {/* <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="checkbox_1" />
                    <label className="form-check-label" for="checkbox_1">Returns Accepted</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="checkbox_2" />
                    <label className="form-check-label" for="checkbox_2">Returns Accepted</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="checkbox_3" />
                    <label className="form-check-label" for="checkbox_3">Completed Items</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="checkbox_4" />
                    <label className="form-check-label" for="checkbox_4">Sold Items</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="checkbox_5" />
                    <label className="form-check-label" for="checkbox_5">Deals &amp; Savings</label>
                </div>
                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="checkbox_6" />
                    <label className="form-check-label" for="checkbox_6">Authorized Seller</label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="radio" name="customRadio" id="radio_1" />
                    <label className="form-check-label" for="radio_1">All Listings</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="radio" name="customRadio" id="radio_2" />
                    <label className="form-check-label" for="radio_2">Best Offer</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="radio" name="customRadio" id="radio_3" />
                    <label className="form-check-label" for="radio_3">Auction</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="radio" name="customRadio" id="radio_4" />
                    <label className="form-check-label" for="radio_4">Buy It Now</label>
                </div> */}
            </div>

            {/* Listing */}
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                    <div className="col-lg-6 mb-2 mb-lg-0">
                        <p className="text-sm text-muted mb-0">Showing {indexOfFirstRecord + 1}–{indexOfFirstRecord + (currentRecords.length)} of {items?.length} results</p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                            <li className="list-inline-item text-muted me-3"><a className="reset-anchor p-0" href="#!"><i className="fas fa-th-large"></i></a></li>
                            <li className="list-inline-item text-muted me-3"><a className="reset-anchor p-0" href="#!"><i className="fas fa-th"></i></a></li>
                            <li className="list-inline-item">
                                <select className="selectpicker" data-customclassName="form-control form-control-sm">
                                    <option value>Sort By </option>
                                    <option value="default">Default sorting </option>
                                    <option value="popularity">Popularity </option>
                                    <option value="low-high">Price: Low to High </option>
                                    <option value="high-low">Price: High to Low </option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Products */}
                {/* <div className="row"> */}
                <ShopProducts items={currentRecords} />
                {/* </div> */}




                {/* PAGINATION */}
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center justify-content-lg-end">
                        <li className="page-item mx-1"><a className="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                        <li className="page-item mx-1 active"><a className="page-link" href="#!">1</a></li>
                        <li className="page-item mx-1"><a className="page-link" href="#!">2</a></li>
                        <li className="page-item mx-1"><a className="page-link" href="#!">3</a></li>
                        <li className="page-item ms-1"><a className="page-link" href="#!" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                    </ul>
                </nav> */}

                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />


            </div>

        </div>
    );
}

export default Sidebar;