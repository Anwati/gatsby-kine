import * as React from "react";
import "./../css/bootstrap.min.scss";
import "./../css/bootstrap-icons.scss";
import "./../css/owl.carousel.min.scss";
import "./../css/owl.theme.default.min.scss";
import "./../css/templatemo-medic-care.scss";
import "@fontsource/poppins"
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import InfoBox from "./InfoBox";
import Treatment from "./Treatment";

const IndexPage = () => {

  return (
    <main>
      <title>Gabrielle Doorenbos</title>

      <NavBar />

      <Header />

      <InfoBox />

      <About />

      <Treatment />

    </main>
  )
}

export default IndexPage
