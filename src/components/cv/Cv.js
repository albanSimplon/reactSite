import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBirthdayCake,
  faIdCard,
  faMapMarkerAlt,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import "./Cv.css";

const Cv = () => {
  document.body.style.background = "white";

  return (
    <Container className="mt-5">
      <Row>
        <Col className="left" md={3}>
          <div className="row">
            <FontAwesomeIcon icon={faIdCard} size="2x" className="col" />
            <p className="col">Veux Alban</p>
          </div>
          <div className="row">
            <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="col" />
            <p className="col">21/07/88</p>
          </div>
          <div className="row">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="col" />
            <p className="col">Mandelieu</p>
          </div>
          <div className="row">
            <FontAwesomeIcon icon={faCar} size="2x" className="col" />
            <p className="col">Permis B</p>
          </div>

          <div className="row">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="col" />
            <a className="col" href="https://www.linkedin.com/in/alban-veux/">
              LinkedIn
            </a>
          </div>
          <div className="row">
            <FontAwesomeIcon icon={faGithub} size="2x" className="col" />
            <a className="col" href="https://github.com/albanSimplon">
              GitHub
            </a>
          </div>
          <p className="text-center mt-3 h3">Formations</p>
          <p className="mt-1 font-weight-bold">
            Développement web et web mobile:
          </p>
          <p>Simplon 2019 certification niveau 5</p>
          <p>
            Opquast certification bonne pratique du web 705/1000 niveau confirmé
          </p>
          <p className="mt-1 font-weight-bold">TOEIC bridge Anglais:</p>
          <p>Greta 2016 158/180</p>
        </Col>
        <Col className="right" md={8}>
          <h1 className="text-center">EXPERIENCE PROFESSIONNELLE</h1>
          <h2 className="text-center">Janvier à aout 2019:</h2>
          <h4>Formation développement web et web mobile</h4>
          <br />
          <h5>Langage:</h5>
          <div className="alignement">
            <p>
              HTML/CSS/Bootstrap
              <br />
              JavaScript/jQuery
              <br />
              PHP/MYsql/Laravel/Symfony
            </p>
          </div>

          <h5>Stage Mai 2019</h5>
          <div className="alignement">
            <p>
              Site de E-commerce créé avec Wordpress pour une association
              regroupant différents artistes de musique dont le besoin était la
              création d’un site pour gérer leur communication pour leurs
              prochains évènements.
              <br />
              Mise en ligne et configuration du site ainsi qu’une documentation
              complète pour la gestion du site fourni au client.
            </p>
          </div>

          <h5>Projet Crawler Juin 2019</h5>
          <div className="alignement">
            <p>
              Le client avait un crawler (Robot d’indexation) qui n’était plus à
              jour depuis 3 ans. Il a fallu le remettre en fonctionnement pour
              qu’il puisse de nouveau se connecter à plusieurs API et pouvoir de
              nouveau exploiter les fichiers JSON et récupérer les informations
              utiles pour être envoyer en BDD.
            </p>
          </div>

          <h5>Projet Dietcal:</h5>
          <div className="alignement">
            <p>
              Ce projet est un site Internet créé grâce au Framework Laravel qui
              permet de calculer son métabolisme de base, et d’avoir un suivi
              régulier du nombre de calories consommées chaque jour sous forme
              de graphique, ainsi qu’un journal de suivi permettant
              d’enregistrer son cardio avec une indication du temps et du nombre
              de calories perdues.
              <br />
              Une partie est réservée à la musculation avec un journal de suivi
              des exercices effectués chaque jour.
              <br />
              Mise en ligne complète en LAMP.
            </p>
          </div>

          <h2>2018</h2>
          <p>Serveur en restauration </p>

          <h2>2012 à 2017</h2>
          <p>Hôtellerie veilleur de nuit</p>

          <h2>Avant 2012</h2>
          <p>Vente dans le secteur informatique et jeux vidéo</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cv;
