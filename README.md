# To-do-nut
Creating for testing MongoDB and DynamoDB on AWS.

How to run MEAN project-----   node-todo

1.	download mongoDB,
2.	create a folder: data
3.	open command window
4.	under c:/users/mave,  go to node-todo/MongoDB/Server/3.0/bin, type: c……>mongod.exe
5.	then show up a command window, mongodb listen on 27017

6,  Copy local database URL into config/database.js 

module.exports = {

	// the database url to connect


	url:'mongodb://localhost:27017/mean-todo_booking'

	
}




open git window
1.	Go to directory: c:/users/mave/node-todo
2.	Type: c…> node server.js
3.	then show: App listen on port 8080
4.	open browser , http://localhost:8080, see the index.html
5.  You would find the path:  node-todo-23/Data/mean-todo_booking: binery file


