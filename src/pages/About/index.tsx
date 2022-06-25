import * as React from "react";
//@ts-ignore
import gab from "./../../images/Gabouille.jpeg";

const About = () => {

  return (
    <div>
      <section className="section-padding" id="about">
        <div className="container">
          <div className="row">

            <div className="col-lg-8 col-md-6 col-12">
              <h4 className="mb-lg-3 mb-3">Moi</h4>

              <p>Ma passion pour le sport, le bien-être, le corps humain et son fonctionnement m’ont mené vers le métier de kinésithérapeute.</p>

              <p>Ayant beaucoup exploré mon corps et les possibilités que celui-ci offre à travers des sports comme l’aïkido, le yoga, le pilates et l’escalade; je me suis rendu compte de l’importance du corps en mouvement. Cela m’a également apporté un panel d’exercices que j’applique dans ma pratique.</p>

              <p>En plus de ma formation en kinésithérapie générale, je pratique la kinésithérapie du sport. Mon parcours personnel et professionnel m’ont mené à me former dans la prise en charge de la douleur persistante ainsi que dans les chaînes physiologiques via l’approche bio-psycho-sociale. En effet, le corps est un ensemble et doit être traité comme tel. </p>

              <p>D’anciennes études en communication ainsi que mon travail au sein du centre multidisciplinaire de la douleur chronique du CHU-UCL Mont-Godinne m’ont permis de développer ma compétence de transmission de l’information qui est essentielle au traitement et à sa réussite. </p>
            </div>

            <div className="col-lg-4 col-md-5 col-12 mx-auto" style={{ position: "relative" }}>
              <div className="circle"></div>
              <div className="featured-circle d-flex justify-content-center align-items-center">

                <img className="img-thumbnail shadow-lg" src={gab} style={{ width: "70%" }} alt="/" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About
