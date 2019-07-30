import React from "react";
import "./App.css";

import Drumpad from "./components/Drumpad";

const names = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open High Hat",
  Z: "Kick + Hat",
  X: "Kick",
  C: "Closed High Hat"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "-",
      audio: [
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          letter: "Q",
          color: "#00FF00",
          clickColor: "#0000FF",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          letter: "W",
          color: "#F00F0F",
          clickColor: "#FFABC0",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          letter: "E",
          color: "#F0F0F0",
          clickColor: "#000FFF",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          letter: "A",
          color: "#FF00FF",
          clickColor: "#0FFF00",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          letter: "S",
          color: "#f1c40f",
          clickColor: "#f39c11",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          letter: "D",
          color: "#f39c11",
          clickColor: "#e67f22",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          letter: "Z",
          color: "#d25400",
          clickColor: "#e84c3d",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          letter: "X",
          color: "#456789",
          clickColor: "#987654",
          active: false
        },
        {
          src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          letter: "C",
          color: "#ABCDEF",
          clickColor: "#FFFF00",
          active: false
        }
      ]
    };
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleDocumentClick);
  }

  handleDocumentClick = e => {
    let manualClick = "none";

    switch (e.keyCode) {
      case 81:
        manualClick = "Q";
        break;
      case 87:
        manualClick = "W";
        break;
      case 69:
        manualClick = "E";
        break;
      case 65:
        manualClick = "A";
        break;
      case 83:
        manualClick = "S";
        break;
      case 68:
        manualClick = "D";
        break;
      case 90:
        manualClick = "Z";
        break;
      case 88:
        manualClick = "X";
        break;
      case 67:
        manualClick = "C";
        break;
      default:
        break;
    }

    if (manualClick !== "none") {
      this.handlePlaySound(manualClick);
    }
  };

  handleClick = e => {
    const identifier = e.target.id.slice(-1);
    this.handlePlaySound(identifier);
  };

  handlePlaySound = e => {
    let audio = document.getElementById(e);
    let display = names[e];
    var that = this;
    this.state.audio.forEach((each, index) => {
      if (each.letter === e) {
        let audio = that.state.audio;
        audio[index].active = true;
        that.setState({ audio }, () => {
          setTimeout(() => {
            audio[index].active = false;
            that.setState({ audio });
          }, 150);
        });
      }
    });
    audio.play();
    this.setState({ display });
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        {this.state.audio.map((each, index) => (
          <Drumpad
            item={each}
            key={index}
            index={index}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}
