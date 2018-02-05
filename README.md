# JointJS + React + Meteor
This small project shows a possibility how JointJS, React and Meteor can be combined.


## Reactivity
In this demo there is only a one sided reactivity. Changes in the JointJS graph transmitted via Meteor into MongoDB. However, the data from the MongoDB are loaded in the graph only when the red button is clicked, so later changes are not reflected.


## Getting startet
Install the packages
> npm install

Run Meteor
> meteor

Go to the site
> open localhost:3000

In order to load the data from the db into the graph press the red button on the upper left corner:
> press "initalize Graph With Data from DB"

Use the buttons to add cells to the graph and moove the cells around. Below is the JSON structure of the graph which is updated via Meteors reactivity.


## Known Bugs
If an Atomic is added (via the button Add Atomic) an error is thrown because the Atomic has properties which start with a dot, which isn't allowed in the MongoDB.
> Exception while simulating the effect of invoking 'cells.insert' errorClass Error: MinimongoError: Key .port-label must not contain '.' [409]


## Credits
Thanks to [Joseph Dhilipanraja](https://github.com/dhilipanraja-joseph/ReactJS-JointJS-Graph) and the [Meteor Team](https://github.com/meteor/simple-todos-react) for providing the base for this example.