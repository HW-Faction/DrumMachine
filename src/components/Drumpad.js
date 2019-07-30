import React, { Component } from "react";

export default class Drumpad extends Component {
  render() {
    let inputStyle = {
      backgroundColor: this.props.item.active
        ? this.props.item.clickColor
        : this.props.item.color,
      borderTop: this.props.item.active
        ? "1px solid #2d3e50"
        : "1px solid #2d3e50",
      borderRight: this.props.item.active
        ? "1px solid #2d3e50"
        : "3px solid #2d3e50",
      borderBottom: this.props.item.active
        ? "1px solid #2d3e50"
        : "3px solid #2d3e50",
      borderLeft: this.props.item.active
        ? "1px solid #2d3e50"
        : "1px solid #2d3e50"
    };
    return (
      <button
        className="drum-pad"
        id={"pad_" + this.props.item.letter}
        onClick={this.props.handleClick}
        id={"button_" + this.props.item.letter}
        style={inputStyle}
      >
        {this.props.item.letter}
        <audio
          className="clip"
          id={this.props.item.letter}
          src={this.props.item.src}
        />
      </button>
    );
  }
}
