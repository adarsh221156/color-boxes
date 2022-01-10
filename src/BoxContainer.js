import React, { Component } from "react";
import "./BoxContainer.css";
import Box from "./Box";
class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      "purple",
      "magenta",
      "violet",
      "pink",
      "yellow",
      "grey",
      "lime",
      "red",
      "white",
      "black",
      "orange",
      "green",
      "#F0F805",
      "DarkOrchid",
      "AliceBlue",
      "DarkSeaGreen",
      "DarkSalmon",
    ],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
