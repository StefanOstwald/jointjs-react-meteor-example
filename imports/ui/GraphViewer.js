import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import joint from 'jointjs'

export default class GraphViewer extends Component {

  componentDidMount(props) {

    this.paper = new joint.dia.Paper({
      el: ReactDOM.findDOMNode(this.refs.paper),
      width: 700,
      height: 600,
      model: this.props.graph,
      gridSize: 1
    });

    if (this.props.paperWasLoadedCallback) this.props.paperWasLoadedCallback();
  }

  render() {
    return <div style={graphStyle} ref="paper" />
  }
}

const graphStyle = {
  margin: "auto",
  border: "1px solid #f1f1f1",
};