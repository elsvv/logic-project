import React, { Component } from "react";
import "./PhilPapers.scss";

import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import Controls from "../../components/Controls/Controls";
import TextComponent from "../../components/TextComponent/TextComponent";

class PhilPapers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: null,
      edges: null,
      isWaiting: false,
      isFiltered: false,
      toFind: "",
      preview: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.doubleClicked !== this.props.doubleClicked) {
      this.handleRender(nextProps.doubleClicked);
    }
  }

  passUp = (nodes, edges) => {
    this.props.handleUp(nodes, edges);
  };

  handleSearch = (event) => {
    if (!event.target.value) {
      this.setState({ nodes: null, edges: null, isFiltered: false });
    }
    let search = event.target.value.toLowerCase();
    this.setState({ toFind: search });

    if (search.length >= 3) {
      let preview = this.props.parsedNodes
        .filter((node) => node.label.toLowerCase().includes(search))
        .reduce((ac, el) => [...ac, { label: el.label, id: el.id }], []);
      return this.setState({ preview: preview, isFiltered: true });
    }
    this.setState({ preview: null, isFiltered: false });
  };

  handleSubmit = (event) => {
    if (event.preventDefault instanceof Function) {
      event.preventDefault();
    }
    const { toFind, isFiltered, preview } = this.state;

    const { parsedNodes, parsedEdges } = this.props;

    if (!isFiltered || preview.length === 0) {
      return false;
    }

    const resNodes = parsedNodes.filter((node) =>
      node.label.toLowerCase().includes(toFind)
    );
    const searchIds = [];
    resNodes.forEach((node) => {
      // node.color = "#fff";
      node.size = 30;
      searchIds.push(node.id);
    });

    const resEdges = parsedEdges.filter((edge) => {
      return searchIds.includes(edge.to) || searchIds.includes(edge.from);
    });

    const childSet = new Set();
    resEdges.forEach((edge) => {
      if (!(childSet.has(edge.to) || childSet.has(edge.from))) {
        childSet.add(edge.to);
        childSet.add(edge.from);
      }
    });
    const childIds = [...childSet];

    parsedNodes.forEach((node) => {
      if (childIds.includes(node.id) && !resNodes.includes(node)) {
        resNodes.push(node);
      }
    });

    this.setState({ nodes: resNodes, edges: resEdges, isFiltered: true });
    this.passUp(resNodes, resEdges);
  };

  handleOption = (event) => {
    const selectedId = parseInt(event.target.dataset.id);
    this.handleRender(selectedId);
  };

  handleRender = (selectedId) => {
    const { parsedEdges, parsedNodes } = this.props;
    const selectedNode = parsedNodes.find((node) => node.id === selectedId);

    let relatedIds = [];
    let edges = [];

    parsedEdges.forEach((edge) => {
      if (edge.to === selectedId || edge.from === selectedId) {
        edges.push(edge);
        relatedIds.push(edge.to);
        relatedIds.push(edge.from);
      }
    });

    let nodes = [];
    relatedIds.forEach((id) => {
      parsedNodes.forEach((node) => {
        if (node.id === id) {
          nodes.push(node);
        }
      });
    });

    nodes = [...new Set(nodes)];

    relatedIds = [...new Set(relatedIds)];

    this.setState({ nodes, edges, isFiltered: true });
    this.passUp(nodes, edges);
    this.props.handleSelectedUp(selectedNode);
    this.props.infoToggle(true);
  };

  render() {
    const { isWaiting, isFiltered } = this.state;
    const nodes = this.state.nodes || this.props.parsedNodes;
    const edges = this.state.edges || this.props.parsedEdges;
    const buttonHandler = isFiltered
      ? this.handleSubmit
      : () => this.passUp(nodes, edges);
    const message = isFiltered ? "Update graph" : "See full map";

    if (this.props.draggie) {
      return (
        <div className="draggie">
          <Controls controls={this.props.controls} />
        </div>
      );
    }

    return (
      <div className="philpapers-container">
        <Controls controls={this.props.controls} />
        <TextComponent
          title="PhilPapers"
          description="Data parsed via PhilPapers API. Here you can visualize the full map with more than 5.5 thousand nodes."
          pick="Start typing for an idea:"
          waiting="data is loading..."
          isWaiting={isWaiting}
        />

        {!isWaiting ? (
          <>
            <SearchBar
              handleSubmit={this.handleSubmit}
              handleSearch={this.handleSearch}
              preview={this.state.preview}
              handleOption={this.handleOption}
            />
            <Button
              text={message}
              data="philpapers"
              handleClick={buttonHandler}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default PhilPapers;
