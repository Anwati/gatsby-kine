import * as React from "react";
//@ts-ignore
import kine_generale from "./../../images/kine-generale.png";
//@ts-ignore
import kine_sport from "./../../images/kine-sport.png";
//@ts-ignore
import chaine_physio from "./../../images/chaine-physio.png";
//@ts-ignore
import douleur from "./../../images/douleur.png";

const Treatment = () => {

  return (
    <div>
      <section className="section-padding" id="treatment">
        <div className="container">

          <div className="row">

            <div className="col-lg-4 col-md-5 col-12 mx-auto" style={{ position: "relative" }}>
              <div className="circle circle--left"></div>
              <div className="featured-circle d-flex justify-content-center align-items-center">

                <img className="img-thumbnail shadow-lg" src={kine_generale} style={{ width: "100%" }} alt="kiné générale" />
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <h2 className="mb-lg-3 mb-3">Kiné générale</h2>

              <p>La kinésithérapie est le traitement par le mouvement. L’objectif est de réaliser des soins de rééducation et de réadaptation afin de maintenir ou de restaurer le mouvement et les capacités du patient.
              </p>

              <p>Les techniques sont réalisées manuellement et ont également pour objectif de soulager les douleurs musculaires et articulaires.
                La kinésithérapie a un but de prévention des altérations, de maintien ou de récupération des capacités fonctionnelles.
              </p>

            </div>

          </div>

          <div className="row">

            <div className="col-lg-8 col-md-6 col-12">
              <h2 className="mb-lg-3 mb-3">Kiné du sport</h2>

              <p>La kinésithérapie du sport se concentre sur les pathologies musculaires, tendineuses et articulaires rencontrées dans le domaine sportif (entorses, tendinopathies, ruptures, douleurs de surcharges). Elle a pour objet d'éviter les blessures, la récidive ou plus simplement pour favoriser une reprise correcte du geste sportif.
              </p>

              <p>La prise en charge se concentre sur la diminution de la douleur, la récupération physique et la reprise progressive et adaptée au patient.
              </p>

              <p>Cette prise en charge s’adresse à toute personne pratiquant du sport quel que soit son niveau.
              </p>

            </div>

            <div className="col-lg-4 col-md-5 col-12 mx-auto" style={{ position: "relative" }}>
              <div className="circle"></div>
              <div className="featured-circle d-flex justify-content-center align-items-center">

                <img className="img-thumbnail shadow-lg" src={kine_sport} style={{ width: "70%" }} alt="kiné du sport" />
              </div>
            </div>

          </div>

          <div className="row">

            <div className="col-lg-4 col-md-5 col-12 mx-auto" style={{ position: "relative" }}>
              <div className="circle circle--left"></div>
              <div className="featured-circle d-flex justify-content-center align-items-center">

                <img className="img-thumbnail shadow-lg" src={chaine_physio} style={{ width: "100%" }} alt="chaînes physiologiques" />
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <h2 className="mb-lg-3 mb-3">Les chaînes physiologiques</h2>

              <p>La méthode des chaînes physiologiques a été développée par M. Busquet dont le but est de lever les tensions structurelles à la base de dysfonctions, déformations et douleurs.
                Elle repose sur un examen complet afin de mettre en évidence les points de tension dans le corps.
              </p>

              <p>Il permet de faire une synthèse du problème et des objectifs en tenant compte du projet du patient et de son environnement afin de mettre en place un traitement adapté et spécifique.
              </p>

              <p>L’objectif est de libérer les zones de tension, redonner une bonne mobilité tissulaire et redonner une meilleure fonction dynamique et statique.
              </p>

            </div>

          </div>

          <div className="row">

            <div className="col-lg-8 col-md-6 col-12">
              <h2 className="mb-lg-3 mb-3">La douleur persistante </h2>

              <p>La douleur persistante n’est pas rare. En effet, on considère qu’un quart de la population y est ou y sera confronté dans sa vie. Cela peut mener à une invalidité importante et durable.
              </p>

              <p>Nous ne pouvons considérer la douleur persistante uniquement sous l’angle des symptômes sans y intégrer tout ce qu’elle vient bousculer dans le quotidien.
              </p>

              <p>Je m’inscris dans une approche bio-psycho-sociale ou le patient et sa situation sont abordés dans la globalité. Grâce à l’implication active du patient, l’objectif est de lui permettre de mieux gérer la douleur et de diminuer son impact sur sa vie quotidienne.
              </p>

            </div>

            <div className="col-lg-4 col-md-5 col-12 mx-auto" style={{ position: "relative" }}>
              <div className="circle"></div>
              <div className="featured-circle d-flex justify-content-center align-items-center">

                <img className="img-thumbnail shadow-lg" src={douleur} style={{ width: "70%" }} alt="douleur persistante" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Treatment;
