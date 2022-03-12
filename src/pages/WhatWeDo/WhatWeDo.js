import React, { useEffect } from "react";
import "./WhatWeDo.css";
import Investment from "../../Images/InvestmentStrat.png";
import AssetMan from "../../Images/AssetMan.png";
import InlineSpan from "../../components/InlineSpan/InlineSpan";
import Institutional from "../../Images/InstitutionalClients.webp";
import Accounting from "../../Images/accounting.jpeg";

function WhatWeDo() {
  document.title = "Hva vi gjør | Invento";
  return (
    <div className="whatWeDoContainer">
      <div className="whatHeader">
        <h1>Hva vi gjør</h1>
      </div>
      <div className="privAssetsManagement">
        {/* Order = true gives image to the left and text to the right and vice versa for order = false */}
        <InlineSpan
          title="Formueforvaltning"
          text="Invento bistår formuende privatpersoner med å 
          kapitalsikre og bevare deres formue. Vi legger vekt på en langsiktig strategi, 
          risikostyring og oppfølging underveis for å ivareta formuen. Mange formuer er ment å vare 
          i generasjoner. Korrekt tilpasset forvaltning er derfor sentralt også her. Vi forvalter 
          også midler gjennom investeringsselskaper. Hvert enkelt investeringsselskap har spesifikke 
          målsetninger og behov. Basert på investeringsselskapets risikotoleranse og tidshorisont bygger
           vi en portefølje som maksimerer avkastningen til avtalt risiko."
          image={AssetMan}
          order={false}
        />
        <div className="pension">
          <h3>Pensjon</h3>
          <p>
            Invento hjelper hver enkel med å tilpasse en strategi for å oppnå
            sitt pensjonsmål. En pensjonsstrategi er individuell og tar hensyn
            til hva man får fra Folketrygden, tjenestepensjon og private
            ordninger. <br />
            Uavhengig av om det er pensjonssparing, forvaltning av formue eller
            forvaltning av et investeringsselskap legges det vekt på en
            individuelt tilpasset investeringsstrategi.
          </p>
        </div>
      </div>
      <div className="investment">
        <InlineSpan
          title="Investeringsstrategi"
          text="De viktigste forutsetningene for en vellykket langsiktig
            forvaltningsstrategi er riktig fordeling av aktivaklasser og en
            regelmessig rebalansering av denne fordelingen. Vår anbefalte
            portefølje vil alltid være investorspesifikk og tilpasset eventuelle
            muligheter eller begrensninger investoren har på sin kapital.
            Invento benytter i all hovedsak aktivaklassene aksjer og renter i
            utarbeidelsen av investeringsporteføljer. Vi anbefaler porteføljer
            basert på investors investeringshorisont, eventuelle forpliktelser,
            regulerte begrensninger og investors øvrige risikotoleranse. Invento
            har en langsiktig tilnærming til kapitalforvaltning som også
            gjenspeiles i en langsiktig tilnærming til våre klientrelasjoner. En
            viktig del av vår jobb er å ta riktige beslutninger for våre
            klienter uansett markedsforhold, og spesielt under ekstreme
            markedsforhold."
          image={Investment}
          order={true}
        />
      </div>
      <div className="instClients">
        <InlineSpan
          title="Institusjonelle kunder"
          text="En institusjonell investor er ofte kjennetegnet ved svært lang 
          investeringshorisont og stor investeringsportefølje. Selv om objektive 
          og regulatoriske krav ofte er strengere for denne typen investor, er den 
          prinsipielle viktigheten av kortsiktig og langsiktig risikostyring og strategisk
           allokering den samme som for enhver annen investor. nvento Kapitalforvaltning AS 
           imøtekommer de muligheter og begrensninger institusjonelle investorer har med en 
           akademisk tilnærming til kapitalforvaltning. Vi søker, på vegne av våre klienter, 
           å maksimere langsiktig realavkastning innenfor rammer av fornuftig risikostyring. 
           Vi oppfordrer i tillegg våre klienter til å være kostnadsbevisste ved inngåelse 
           av forvaltningsavtale."
          image={Institutional}
          order={false}
        />
      </div>
      <div className="accounting">
        <InlineSpan
          title="Regnskap"
          text="Vårt regnskapskontor Invento Regnskap AS er spesialisert innen regnskapsførsel for selskaper med fokus på verdipapirer."
          image={Accounting}
          order={true}
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
