import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const InfoBox = () => {

  return (
      <div className="custom-banner">
        <div className="info-box">
          <FontAwesomeIcon className="FA-Icon" icon={faLocationDot} />
          <p className="info-text">Chaussée Saint-Pierre 280-282</p>
          <p className="info-text">1040 Etterbeek</p>
        </div>
        <div className="info-box">
          <FontAwesomeIcon className="FA-Icon" icon={faClock} />
          <p className="info-text">Mercredi : 8h - 18h</p>
          <p className="info-text">Jeudi : 8h - 17h</p>
        </div>
      </div>
  )
}

export default InfoBox
