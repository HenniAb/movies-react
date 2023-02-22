import React, { useState } from "react";

const Research = () => {
  const [researchValue, setResearcValue] = useState();

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            onChange={(e) => setResearcValue(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
      </div>

      <div className="btn-sort-container">
        <div id="goodToBad">
          <span></span> Top
        </div>

        <div id="badToGood">
          <span></span>Flop
        </div>
      </div>
    </div>
  );
};

export default Research;
