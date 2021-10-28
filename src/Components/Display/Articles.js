import React, { Component } from "react";
import News from "./News";
import Spinner from "../Layout/Spinner";

export class Articles extends Component {
  render() {
    //console.log("Properties passed " + this.props.id);
    if (this.props.loading == true) {
      console.log("spinner");

      return <Spinner />;
    } else {
      return (
        <div className="grid-3">
          {this.props.articles.map((article) => (
            <News article={article} />
          ))}
        </div>
      );
    }
  }
}

export default Articles;
