import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  //Appel 8h30 - 19h du lundi au samedi
  return (
    <div className="address-map-container" id="contact">
      <div
        className="address-map"
        dangerouslySetInnerHTML={{
          __html: `<div class='mapouter'><div class='gmap_canvas'><iframe width='800' height='384' id='gmap_canvas' src='https://maps.google.com/maps?q=Chau.%20Saint-Pierre%20280/282,%201040%20Etterbeek&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/'>divi discount</a><br><style>.mapouter{position:relative;text-align:right;height:384px;width:869px;}</style><a href='https://www.embedgooglemap.net'>embedding google maps in webpage</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:384px;width:869px;}</style></div></div>`,
        }}
      />
      <div className="contact">
        <a className="custom-button" style={{marginRight: 0, marginBottom: "20px"}}>
          <span
            class="bi bi-calendar-check"
            style={{ paddingRight: "10px" }}
          ></span>
          Prendre rendez-vous
        </a>
        <p className="contact-text" style={{ color: "white" }}>
          <i className="bi-phone"></i> 0496 32 52 37
        </p>
        <div className="contact-box">
          <FontAwesomeIcon
            className="FA-Icon"
            icon={faLocationDot}
            style={{ color: "white" }}
          />
          <p className="contact-text">Chaussée Saint-Pierre 280-282</p>
          <p className="contact-text">1040 Etterbeek</p>
        </div>
        <div className="contact-box">
          <FontAwesomeIcon
            className="FA-Icon"
            icon={faClock}
            style={{ color: "white" }}
          />
          <p className="contact-text">Mercredi : 8h - 18h</p>
          <p className="contact-text">Jeudi : 8h - 17h</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
