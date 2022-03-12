import React, { useEffect } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <span className="footerLogo">INVENTO</span>
      <div className="footerInfo">
        <span className="footerLinks">
          <h2>Lenker</h2>
          <a href="/">Hjem</a>
          <a href="/whatwedo">Hva vi gjør</a>
          <a href="/">Ressurser</a>
          <a href="/">Kontakt Oss</a>
          <a href="/">Logg inn</a>
        </span>
        <span className="footerContact">
          <h2>Kontakt Oss</h2>
          <a
            href="https://www.google.com/maps/place/Invento+Kapitalforvaltning+AS/@59.969115,10.766454,14z/data=!4m5!3m4!1s0x46416e77f4009cef:0x36a110a1814b2d85!8m2!3d59.9103091!4d10.7493708"
            target="_blank"
          >
            Invento Kapitalforvaltning AS Strandgata 19 0152 Oslo
          </a>
          <a href="tel:+47 22 59 22 50">22 59 22 50</a>
          <a href="mailto:post@invento.no">post@invento.no</a>
        </span>
        <span>
          <h2>Om Oss</h2>
          <p>
            Invento Kapitalforvaltning tilbyr formuesforvaltning og
            investeringstjenester for privatpersoner, bedrifter, stiftelser,
            foreninger og institusjoner. Vår visjon er å gjøre våre kunder
            finansielt tryggere og i bedre stand til å ivareta egne verdier.
            P.t. forvalter vi ca 4,2 milliarder kroner for våre kunder.
          </p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="300"
                height="250"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Invento%20Kapitalforvaltning%20AS%20Strandgata%2019%200152%20Oslo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://putlocker-is.org"></a>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Footer;
