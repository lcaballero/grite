import React from 'react';

function GeneralGradient() {
   return (
      <ul className="cf">
         <li className="cl c0"></li>
         <li className="cl g1"></li>
         <li className="cl g2"></li>
         <li className="cl g3"></li>
         <li className="cl g4"></li>
         <li className="cl g5"></li>
      </ul>
   );
}

function Spot() {
   return (
      <ul className="cf">
         <li className="cl c0"></li>
         <li className="cl s1"></li>
         <li className="cl s2"></li>
         <li className="cl s3"></li>
      </ul>
   );
}

function TwistedSpot() {
   return (
      <ul className="cf">
         <li className="cl c0"></li>
         <li className="cl ts1"></li>
         <li className="cl ts2"></li>
         <li className="cl ts3"></li>
      </ul>
   );
}

function Classy() {
   return (
      <ul className="cf">
         <li className="cl c0"></li>
         <li className="cl cy1"></li>
         <li className="cl cy2"></li>
         <li className="cl cy3"></li>
         <li className="cl cy4"></li>
      </ul>
   );
}

export function Palette() {
   return (
      <div className="palette">
         <Spot/>
         <TwistedSpot/>
      </div>
   );
}
