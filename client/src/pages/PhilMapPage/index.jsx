import React from "react";
import "./App.css";

import ReactGraphVisNeibours from "./components/Graph/ReactGraphVisNeibours";

import MenuContainer from "./containers/MenuContainer/MenuContainer";
import InfoContainer from "./containers/InfoContainer/InfoContainer";

import Loader from "./components/Loader/Loader";
import { getPP, getInPhoEntity } from "./utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: [],
      graph: null,
      graphRender: false,
      loading: true,
      selectedData: null,
      displayInfo: false,
      doubleClicked: null,
      ppData: null,
      inphoData: null,
    };
  }

  componentDidMount() {
    Promise.all([getPP(), getInPhoEntity()]).then(([ppData, inphoData]) =>
      this.setState({ ppData, inphoData, loading: false })
    );
  }

  handleUp = (nodes, edges) => {
    this.setState({ nodes, edges, graphRender: true });
  };

  handleSelectedUp = (selectedData) => {
    this.setState({ selectedData });
  };

  infoToggle = (bool) => {
    this.setState({ displayInfo: bool });
  };

  nodeUp = (doubleClicked) => {
    this.setState({ doubleClicked });
  };

  render() {
    const {
      graphRender,
      loading,
      selectedData,
      displayInfo,
      doubleClicked,
      ppData,
      inphoData,
    } = this.state;

    return (
      <div className="App">
        {displayInfo ? (
          <InfoContainer
            selectedData={selectedData}
            infoToggle={this.infoToggle}
            handleUp={this.handleUp}
          />
        ) : null}
        {graphRender ? (
          <ReactGraphVisNeibours
            nodeUp={this.nodeUp}
            nodes={this.state.nodes}
            edges={this.state.edges}
          />
        ) : null}

        {loading ? <Loader /> : null}

        {!loading && (
          <MenuContainer
            doubleClicked={doubleClicked}
            infoToggle={this.infoToggle}
            handleSelectedUp={this.handleSelectedUp}
            handleUp={this.handleUp}
            {...{ ppData, inphoData }}
          />
        )}
      </div>
    );
  }
}

export default App;
