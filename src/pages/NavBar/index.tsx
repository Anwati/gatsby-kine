import * as React from "react";

const NavBar = () => {

  // const [width, setWidth] = React.useState<number>(window.innerWidth);

  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }
  // React.useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  // const isMobile = width <= 768;

  // const [navBarMenuVisible, setNavBarMenuVisible] = React.useState(!isMobile);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg">
      <div className="container">
        <a className="navbar-brand mx-auto d-lg-none" href="#home">
          Gabrielle Doorenbos
          <strong className="d-block">Kinésithérapeute</strong>
        </a>

        {/* <button
          onClick={() => setNavBarMenuVisible(!navBarMenuVisible)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* {navBarMenuVisible && ( */}
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Accueil
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  A propos
                </a>
              </li>

              <a className="navbar-brand d-none d-lg-block" href="#home">
                Gabrielle Doorenbos
                <strong className="d-block">Kinésithérapeute</strong>
              </a>

              <li className="nav-item">
                <a className="nav-link" href="#treatment">
                  Offre de soins
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default NavBar;
