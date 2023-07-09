
// import { Link } from "react-router-dom";
// import './home.css';




function Newsletter() {
    return (
      <div className="Newsletter">
  
  <section className="py-5 px-3">
        <div className="container p-0">
          <div className="row gy-3">
            <div className="col-lg-6">
              <h5 className="text-uppercase">Let's be friends!</h5>
              <p className="text-sm text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
            </div>
            <div className="col-lg-6">
              <form action="#">
                <div className="input-group">
                  <input className="form-control form-control-lg" type="email" placeholder="Enter your email address" aria-describedby="button-addon2"/>
                    <button className="btn btn-dark" id="button-addon2" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    );
  }
  
  export default Newsletter;
  