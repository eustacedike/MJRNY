
// import { Link } from "react-router-dom";
// import './home.css';
import { Carousel } from 'react-bootstrap';

import bg1 from '../img/hero-banner-alt.jpg';

function Hero() {
  return (
    <div className="Hero">

      {/* <div className="container carousel slide" id="carouselExampleIndicators" data-ride="carousel">

        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <section className="carousel-inner d-flex">
          <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: `url(${bg1})` }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: "url(../img/hero-banner-alt.jpg)" }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center w-100" style={{ background: "url(../img/hero-banner-alt.jpg)" }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      


</div> */}
      <Carousel>
      <Carousel.Item interval={2000}>
        <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: `url(${bg1})` }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: `url(${bg1})` }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="hero carousel-item active pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: `url(${bg1})` }}>
            <div className="container py-5" style={{ marginTop: "10rem" }}>
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="#products">Browse collections</a>
                </div>
              </div>
            </div>
          </div>
      </Carousel.Item>
    </Carousel>

    </div >
  );
}

export default Hero;
