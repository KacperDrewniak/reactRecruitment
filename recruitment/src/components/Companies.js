import React from "react";

// Table with company 

const companies=['company','company','company','company',
                 'company','company','company','company',
                 'company','company','company','company',
                 'company','company','company','company',]

const Companies = () => (
  <aside>
    <h1 className="header">Trusted Us</h1>

    <div className="wrapperOfLogos">
        
    {companies.map(()=>(<div/>))}

    </div>

  </aside>
);

export default Companies;
