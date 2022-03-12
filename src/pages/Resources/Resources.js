import React from "react";
import "./css/Resources.css";

function Resources() {
  return (
    <div className="resourceContainer">
      <header className="resourceHeader">
        <h1>Ressurser</h1>
      </header>
      <div className="pdfContainer">
        <span className="inlinepdfViewer">
          <h2>
            Alminnelige forretningsvilkår for Invento Kapitalforvaltning AS
          </h2>
          <iframe
            src="https://admin.mekke.no/data/downloads/2594/AlminneligeforretningsvilkrforInventoKapitalforvaltningASv22.2.pdf"
            width="200%"
            height="150%"
          />
          <span className="excerpt">
            <h3>Utdrag:</h3>
            <p>
              "Invento sin investeringsrådgivning er basert på en bred analyse
              av forskjellige typer finansielle instrumenter. Utvalget er ikke
              begrenset til finansielle instrumenter som utstedes eller leveres
              til noen som kan betegnes som nær forbindelse med Invento, men det
              opplyses om at Inventos forvaltningsavdeling mottar markedsmessig
              godtgjørelse for forvaltning av fondet APS Global Equity. Denne
              godtgjørelsen innebærer ingen økte kostnader for kunder,
              sammenlignet med forvaltning i andre tilsvarende aksjefond."
            </p>
          </span>
          <a
            href="https://admin.mekke.no/data/downloads/2594/AlminneligeforretningsvilkrforInventoKapitalforvaltningASv22.2.pdf"
            className="newTab"
          >
            Les dokument i ny fane
          </a>
        </span>
        <span className="inlinepdfViewer">
          <h2>Retningslinjer for ordreutforelse</h2>
          <iframe
            src="https://admin.mekke.no/data/downloads/2594/Retningslinjerforordreutfrelse.pdf"
            width="200%"
            height="150%"
          />
        </span>
        <span className="excerpt">
          <h3>Utdrag:</h3>
          <p>
            "Invento sin investeringsrådgivning er basert på en bred analyse av
            forskjellige typer finansielle instrumenter. Utvalget er ikke
            begrenset til finansielle instrumenter som utstedes eller leveres
            til noen som kan betegnes som nær forbindelse med Invento, men det
            opplyses om at Inventos forvaltningsavdeling mottar markedsmessig
            godtgjørelse for forvaltning av fondet APS Global Equity. Denne
            godtgjørelsen innebærer ingen økte kostnader for kunder,
            sammenlignet med forvaltning i andre tilsvarende aksjefond."
          </p>
        </span>
        <a
          href="https://admin.mekke.no/data/downloads/2594/AlminneligeforretningsvilkrforInventoKapitalforvaltningASv22.2.pdf"
          className="newTab"
        >
          Les dokument i ny fane
        </a>
      </div>
    </div>
  );
}

export default Resources;
