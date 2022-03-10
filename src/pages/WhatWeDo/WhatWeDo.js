import React, { useEffect } from "react";
import "./WhatWeDo.css";
import Investment from "../../Images/InvestmentStrat.png";
import AssetMan from "../../Images/AssetMan.png";
import InlineSpan from "../../components/InlineSpan/InlineSpan";

function WhatWeDo() {
  return (
    <div className="whatWeDoContainer">
      <div className="whatHeader">
        <h1>Hva vi gjør</h1>
      </div>
      <div className="assetsManagement">
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
      </div>
      <div className="investment">
        <InlineSpan
          title="InvesteringsStrategi"
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
    </div>
  );
}

export default WhatWeDo;
