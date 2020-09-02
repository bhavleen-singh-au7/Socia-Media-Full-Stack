import React from "react";
import spinner from './spinner.gif';

export default () => {

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <img
        src={spinner}
        style={{
          width: "400px",
        }}
        alt="Loading..."
      />
    </div>
  );
};
