
import React, { useState } from "react";

const Selection = ({ applyColor, dataTestId }) => {
  const [style, setStyle] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setStyle);  // Sets background to selected color
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={handleClick}
      data-testid={dataTestId}  // Optional: If used in tests
    >
      Selection
    </div>
  );
};

export default Selection;
