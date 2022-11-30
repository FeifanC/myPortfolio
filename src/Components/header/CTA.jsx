import React from "react";
import Resume from "../../assets/Feifan Cao.doc";
import proposal from "../../assets/Research Proposal.docx";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn2">
        Let's Get Familiar
      </a>
      <div>
        <a href={proposal} download className="btn">
          Research Proposal
        </a>
      </div>
    </div>
  );
};

export default CTA;
