import React from "react";

import iconDevelopment from "../assets/images/icon_development.svg";
import iconAudit from "../assets/images/icon_audyt.svg";
import iconConsulting from "../assets/images/icon_consulting.svg";

const Main = () => (
  <main>
    <h1 className="header">Our Passion</h1>
    <aside>
      <div className="passion">
        <div>
          <img src={iconDevelopment} alt="development icon" />
          <h3>Development</h3>
        </div>

        <p>Living in today's metropolitan world of cellular phones, mobile computers</p>
      </div>
      <div className="passion">
        <div>
          <img src={iconAudit} alt="audit icon" />
          <h3>Audyt</h3>
        </div>

        <p>It is a good idea of think of your PC as an office. It stores files, programs, pictures.</p>
      </div>
      <div className="passion">
        <div>
          <img src={iconConsulting} alt="consulting icon" />
          <h3>Consulting</h3>
        </div>
        <p>Last mont ,my wife, Anne Doe, took me to Las Vegas because she had to go.</p>
      </div>
    </aside>
  </main>
);

export default Main;
