# burger

Inside your burger directory, create a folder named config.
Create a connection.js file inside config directory.

Inside the connection.js file, setup the code to connect Node to MySQL.
Export the connection.

Create an orm.js file inside config directory.

Import (require) connection.js into orm.js

In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

Export the ORM object in module.exports.

Model setup

Inside your burger directory, create a folder named models.

In models, make a burger.js file.
Inside burger.js, import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
