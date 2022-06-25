import * as React from "react";
//@ts-ignore
import office from "./../../images/office.jpg";
//@ts-ignore
import office2 from "./../../images/office_test.jpg";
//@ts-ignore
import logo from "./../../images/logo.png";

const Header = () => {

  return (
    <section className="hero" id="home">
      <div className="container">
        <div><img src={logo} className="header-image" alt="/" /></div>
        <div className="col-12">

          <div className="heroText d-flex flex-column justify-content-center">

            <h2 className="mt-auto mb-2 text-center color-primary">
              Gabrielle Doorenbos
            </h2>

            <h4 className="mb-4 text-center"> Kinésithérapeute</h4>
            <h6 className="mb-4 text-center"> Kiné générale</h6>
            <h6 className="mb-4 text-center"> Kiné du sport</h6>
            <h6 className="mb-4 text-center"> Douleur persistante</h6>
            <h6 className="mb-4 text-center"> Chaines Physiologiques</h6>


            <div className="heroLinks d-flex flex-wrap align-items-center text-center">
              <a className="me-4 custom-button" href="#about" >Prendre rendez-vous</a>

              <p className="contact-phone mb-0"><i className="bi-phone"></i> 0496 32 52 37</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Header
