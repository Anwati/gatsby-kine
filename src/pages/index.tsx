import * as React from "react";
import "./../css/bootstrap.min.scss";
import "./../css/bootstrap-icons.scss";
import "./../css/owl.carousel.min.scss";
import "./../css/owl.theme.default.min.scss";
import "./../css/templatemo-medic-care.scss";
import "@fontsource/poppins";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import InfoBox from "./InfoBox";
import Treatment from "./Treatment";
import Contact from "./Contact";
import SEO from "./../components/SEO";

const IndexPage = () => {
  return (
    <main>
      <SEO />

      <NavBar />

      <Header />

      <InfoBox />

      <About />

      <Treatment />

      <Contact />
    </main>
  );
};

export default IndexPage;

