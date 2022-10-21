import React, { Component } from "react";
import "./MenuContainer.scss";

import Entry from "../../components/Entry/Entry";
import PhilPapers from "../PhilPapers/PhilPapers";
import InPho from "../InPho/InPho";
import { getInPhoEntity, getPP } from "../../utils";

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "entry",
      draggie: false,
      ppData: null,
      inphoData: null,
    };
  }

  changeDisplay = (display) => {
    this.setState({ display });
  };

  toggleDraggie = () => {
    const { draggie } = this.state;
    this.setState({ draggie: !draggie });
    console.log("toggleDraggie", this.state.draggie);
  };

  render() {
    const { display, draggie } = this.state;
    const { ppData, inphoData } = this.props;

    const switcher = draggie
      ? { name: "max", handler: this.toggleDraggie, arg: "draggie" }
      : { name: "mini", handler: this.toggleDraggie, arg: "draggie" };
    const controls = [
      { name: "back", handler: this.changeDisplay, arg: "entry" },
      switcher,
    ];

    return (
      <div className="MenuContainer">
        {display === "entry" ? (
          <Entry changeDisplay={this.changeDisplay} />
        ) : null}
        {display === "philpapers" && ppData ? (
          <PhilPapers
            doubleClicked={this.props.doubleClicked}
            controls={controls}
            toggleDraggie={this.toggleDraggie}
            draggie={draggie}
            infoToggle={this.props.infoToggle}
            handleSelectedUp={this.props.handleSelectedUp}
            changeDisplay={this.changeDisplay}
            handleUp={this.props.handleUp}
            {...ppData}
          />
        ) : null}
        {display === "inpho" && inphoData ? (
          <InPho
            doubleClicked={this.props.doubleClicked}
            controls={controls}
            toggleDraggie={this.toggleDraggie}
            draggie={draggie}
            infoToggle={this.props.infoToggle}
            handleSelectedUp={this.props.handleSelectedUp}
            changeDisplay={this.changeDisplay}
            handleUp={this.props.handleUp}
            {...inphoData}
          />
        ) : null}
      </div>
    );
  }
}

export default MenuContainer;
