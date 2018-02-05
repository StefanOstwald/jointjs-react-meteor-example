import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import GraphTracker from '../graph/graphTracker';
import GraphEditor from './GraphEditor';
import JsonViewer from './JsonViewer';
import GraphViewer from './GraphViewer';
import { Cells } from '../api/cells.js';
import joint from 'jointjs'
import _ from 'lodash';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.graph = new joint.dia.Graph();
    this.graphTracker = new GraphTracker(this.graph);
    this.state = { graphWasLoadedFromDb: false };
    this.loadCellsFromProps = this.loadCellsFromProps.bind(this);
    this.renderLoadFromDbButton = this.renderLoadFromDbButton.bind(this);
  }

  loadCellsFromProps() {
    if (this.props.dbCellsIsLoaded) this.graph.fromJSON({ cells: this.props.dbCells });
    this.setState({ graphWasLoadedFromDb: true });
  }

  render() {
    return (
      <div>
        {this.state.graphWasLoadedFromDb ? null : this.renderLoadFromDbButton()}
        <GraphEditor graph={this.graph} />
        <GraphViewer graph={this.graph} />
        <JsonViewer json={this.props.dbCells} />
      </div>
    );
  }

  renderLoadFromDbButton() {
    const buttonStyle = {
      width: 200, height: 100, backgroundColor: 'red'
    };
    return <button style={buttonStyle} onClick={this.loadCellsFromProps} > initalize Graph With Data from DB</button>
  }
}

export default withTracker(() => {
  const cellsSubscribeTracker = Meteor.subscribe('cells');
  const dbCellsIsLoaded = cellsSubscribeTracker.ready();
  const dbCells = Cells.find({}).fetch();

  return {
    dbCells,
    dbCellsIsLoaded
  };
})(App);
