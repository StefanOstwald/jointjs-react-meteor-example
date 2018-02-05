import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import joint from 'jointjs'
import GraphViewer from './GraphViewer'
import JsonViewer from './JsonViewer'
import Shapes from '../graph/shapes';
import { withTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';


export default class GraphEditor extends Component {

    constructor(props) {
        super(props);
        this.handleAddRectangle = this.handleAddRectangle.bind(this);
        this.handleAddCircle = this.handleAddCircle.bind(this);
        this.handleAddAtomic = this.handleAddAtomic.bind(this);
        this.addToCellToGraph = this.addToCellToGraph.bind(this);
    }

    addToCellToGraph(a) {
        this.props.graph.addCell(a);
    }

    handleAddRectangle() {
        this.addToCellToGraph(Shapes.createRectangle());
    }

    handleAddCircle() {
        this.addToCellToGraph(Shapes.createCricle());
    }

    handleAddAtomic() {
        this.addToCellToGraph(Shapes.createAtomic());
    }

    renderButtons() {
        return (<div>
            <button onClick={this.handleAddRectangle}>Add rectangle</button>
            <button onClick={this.handleAddCircle}>Add circle</button>
            <button onClick={this.handleAddAtomic}>Add Atomic</button>
        </div>)
    }

    render() {
        return (
            <div>
                {this.props.graph ? this.renderButtons() : <div>There is no Graph.</div>}
            </div >
        )
    }
}