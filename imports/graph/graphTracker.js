import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import joint from 'jointjs'
import { withTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import { Cells } from '../api/cells.js';


export default class GraphTracker {

  constructor(graph) {

    this.onGraphAdd = this.onGraphAdd.bind(this);
    this.onGraphChange = this.onGraphChange.bind(this);
    this.onGraphRemove = this.onGraphRemove.bind(this);

    const debounceWaitMs = 300;
    this.updateCellInDbDebounced = _.debounce(this.updateCellInDb, debounceWaitMs);
    this.updateCellInDbDebounced = this.updateCellInDbDebounced.bind(this);

    this.graph = graph;
    this.graph.on('add', this.onGraphAdd);
    this.graph.on('change', this.onGraphChange);
    this.graph.on('remove', this.onGraphRemove);
  }

  onGraphAdd(cell) {
    this.insertCellInDb(cell);
  }

  onGraphChange(cell) {
    this.updateCellInDbDebounced(cell);
  }

  onGraphRemove(cell) {
    this.removeCellInDb(cell);
  }

  insertCellInDb(cell) {
    Meteor.call("cells.insert", cell.toJSON());
  }

  removeCellInDb(cell) {
    Meteor.call("cells.remove", cell._id);
  }

  updateCellInDb(cell) {
    Meteor.call("cells.update", cell.toJSON());
  }
}
