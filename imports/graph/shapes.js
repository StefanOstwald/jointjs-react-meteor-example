import joint from 'jointjs'

export default class Shapes {

  static createRectangle() {
    return new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: {
        rect: { fill: 'blue' },
        text: { text: 'RECTANGLE', fill: 'white' }
      }
    });
  }

  static createCricle() {
    return new joint.shapes.basic.Circle({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 100 },
      attrs: {
        circle: { fill: 'green' },
        text: { text: 'CIRCLE', fill: 'white' }
      }
    });
  }

  static createLink(from, to) {
    return new joint.dia.Link({
      source: { id: from },
      target: { id: to }
    });
  }

  static createAtomic() {
    return new joint.shapes.devs.Atomic({

      position: {
        x: 50,
        y: 50
      },
      size: {
        width: 100,
        height: 100
      },
      inPorts: ['in1'],
      outPorts: ['out1']
    });
  }

}