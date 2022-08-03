import React from "react";
import ReactDOM from "react-dom";

const name = "Avinash";
const date = new Date();
let year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
