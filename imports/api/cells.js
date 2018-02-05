import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Cells = new Mongo.Collection('cells');

if (Meteor.isServer) {
  Meteor.publish('cells', function graphPublication() {
    return Cells.find({});
  });
}

Meteor.methods({
  'cells.insert'(cell) {
    Cells.insert(cell);
  },
  'cells.remove'(cellId) {
    check(cellId, String);
    Cells.remove(cellId);
  },
  'cells.update'(cell) {
    Cells.update(cell._id, cell);
  }
});
