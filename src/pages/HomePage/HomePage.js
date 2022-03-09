import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <div className="homeContainer">
      <Header />
      <div className="whoWeAre">
        <h1>Hvem vi er</h1>
        <p>
          Invento Kapitalforvaltning tilbyr formuesforvaltning og
          investeringstjenester for privatpersoner, bedrifter, stiftelser,
          foreninger og institusjoner. Vår visjon er å gjøre våre kunder
          finansielt tryggere og i bedre stand til å ivareta egne verdier. P.t.
          forvalter vi ca 4,2 milliarder kroner for våre kunder.
        </p>
        <div className="whoAreWeInfo">
          <span className="info history">
            <h2>Historie</h2>
            <p>
              Invento ble startet i 2001 og har siden jobbet mot privat og
              bedriftsmarkedet innen forvaltning, forsikring og naturlig
              tilknyttede tjenester.
            </p>
          </span>
          <span className="info concession">
            <h2>Konsesjon</h2>
            <p>
              Invento Kapitalforvaltning AS er et verdipapirforetak med
              konsesjon fra Finanstilsynet til bl.a. å utføre
              investeringsrådgivning, aktiv forvaltning, utførelse av ordre på
              vegne av kunde, samt mottak og formidling av ordre i finansielle
              instrumenter.
              <br />
              <a
                className="infoLink"
                href="https://www.finanstilsynet.no/virksomhetsregisteret"
                target="_blank"
              >
                Se oppføring hos Finanstilsynet her
              </a>
            </p>
          </span>
          <span className="info auth">
            <h2>Autorisasjon</h2>
            <p>
              Autorisasjonsordningen for finansielle rådgivere (AFR) er en
              nasjonal autorisasjonsordning som fremmer og sikrer nødvendig
              kunnskap, holdninger og ferdigheter hos finansielle rådgivere.
              Målet er å styrke kvaliteten på finansiell rådgivning overfor
              kunder. Formuesforvaltere i Invento er autoriserte finansielle
              rådgivere.
              <br />
              <a
                className="infoLink"
                href="https://www.finaut.no/"
                target="_blank"
              >
                Les mer om AFR
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
