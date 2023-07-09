






function Modal (props) {
    
    
    
    return (
      <div className="Modal">



 {/* Modal */}
      <div className="modal fade" id="productView" tabindex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content overflow-hidden border-0">
            <button className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0"><a className="glightbox product-view d-block h-100 bg-cover bg-center" style={{background: `url(${props.image})`}} href={props.image} data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href={props.image} data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href={props.image} data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a></div>
                <div className="col-lg-6">
                  <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 1"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 2"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 3"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 4"><i className="fas fa-star small text-warning"></i></li>
                    </ul>
                    <h2 className="h4">{props.title}</h2>
                    <p className="text-muted">${props.price}</p>
                    <p className="text-sm mb-4">{props.description}</p>
                    <div className="row align-items-stretch mb-4 gx-0">
                      <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                          <div className="quantity">
                            <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                            <input className="form-control border-0 shadow-0 p-0" type="text" value="1"/>
                            <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5"><a className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="#">Add to cart</a></div>
                    </div><a className="btn btn-link text-dark text-decoration-none p-0" href="#!"><i className="far fa-heart me-2"></i>Add to wish list</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div >
  );
}

export default Modal;