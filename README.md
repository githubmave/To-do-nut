# Node Todo App

A Node app built with MongoDB and Angular. For demonstration purposes and a tutorial.

Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores like a hoarder.

## Requirements

- [Node and npm](http://nodejs.org)

## Installation

1. Clone the repository: `git clone git@github.com:scotch-io/node-todo`
2. Install the application: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`

## Tutorial Series

This repo corresponds to the Node Todo Tutorial Series on [scotch.io](http://scotch.io)

Each branch represents a certain tutorial.
- tut1-starter: [Creating a Single Page Todo App with Node and Angular](http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular)
- tut2-services: Coming Soon
- tut3-auth: Coming Soon
- tut4-sockets: Coming Soon
- ==========================
- 
How to run MEAN project-----   node-todo

1.	download mongoDB, and double click the installation file to install;
2.	create a folder: data
3.	open command window
4.	under c:/users/mave,  go to node-todo/MongoDB/Server/3.0/bin, type: c……>mongod.exe
5.	then show up a command window, mongodb listen on 27017

-----------------------------------------------------------------------------------------
  Copy local database URL into config/database.js 

module.exports = {

	// the database url to connect
	//url : 'mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu'

	url:'mongodb://localhost:27017/mean-todo_booking'

	
}
--------------------------------

open git window
1.	Go to directory: c:/users/mave/node-todo
2.	Type: c…> node server.js
3.	then show: App listen on port 8080
4.	
4.	open browser , http://localhost:8080, see the index.html
5.	Automatically restart server when files change: By default, node will not monitor for file changes after your server has been started. This means you’d have to shut down and start the server every time you made a file change. This can be fixed with nodemon. To use: install nodemon globally npm install -g nodemon. Start your server with nodemon server.jsnow. Smooth sailing from there.
6.	You would find the path:  node-todo-23/Data/mean-todo_booking: binery file

- tut5-redis: Coming Soon
- tut6-organization: Coming Soon

Happy Todo-ing!

![Todo-aholic](http://i.imgur.com/ikyqgrn.png)
