import React from "react";
import Resume from "../../assets/Feifan Cao.doc";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn2">
        Let's Get Familiar
      </a>
    </div>
  );
};

export default CTA;
