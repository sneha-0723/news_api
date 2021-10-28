import React, { Component } from "react";
import spinner from "./draw-spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt="LOADING..."
          style={{ width: "200px", display: "block", margin: "auto" }}
        ></img>
      </div>
    );
  }
}

export default Spinner;
