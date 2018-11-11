# bamazon!

## What this is.

This is a command line interface application made to test connections to a mySQL database in order to update the data within it with a node application.

The premise is that we are purchasing products from bamazon! A CLI storefront that sells marbles, dice, and other miscellaneous tabletop related toys.

The node application itself requires the following npm modules:

* mysql: connects to mySQL database
* cli-table3: facillitates in building tables in the CLI
* inquirer: facillitates in taking responses from prompts to the user.

---------------------

## The database:

The mySQL database is set up on a MAMP server at port 8889, and is populated with 10 sample items.

![MAMP](images/img-01.png)

---------------------

![mySQL](images/img-02.png)


---------------------

Finally, we set up the connection to the server in the [bamazonCustomer.js](bamazonCustomer.js) file.

![Setting up a Database](images/img-03.png)
 
---------------------

## Functionallity

In order to display the products, first we call a connection.query that reads the rows of files from an object of arrays sent from the mySQL database.

If succesful, this calls a funcction that creates the table using the cli-table 3 node module. This module requires that each field column be an index in an array, so we used the .map and Object.values methods to store the respective arrays in js variables.

![Making a table](images/img-04.png)

---------------------

![bamazon! interface](images/img-05.png)

Prompts are handled with the inquirer node modue in two separate functions. First they make sure that the selected item_id is part of the inventory and then they make sure that there are enough of that item. Failure to meet both of these requirements will result in an error message.

![Customer Request](images/img-06.png)

---------------------

![Quantity desired](images/img-07.png)




* Create a basic server using Express.JS

// require npm modules: express, path
// declare global vars related to server (express, path)
// set up express server

* Create a few array variables that will hold the data

// current reservations (max index = 4)
// waiting list

* Create a set of routes for getting and posting table data


* Create a set of routes for displaying the HTML pages

* Use jQuery to run AJAX calls to GET and POST data from users to the Express server

---------------------


## Phase II - For this second phase, aim to complete the following

* Backend Team:

Create a basic Express server.

Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

* Frontend Team:

Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage.
All: If you finish early, begin thinking about how the Data, API, and Routes should look.

---------------------


## Phase III - For this third phase, aim to complete the following

* Backend Team:

Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data

Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).

* Frontend Team:

Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits localhost:3000/tables... they should be shown the table.html page.)

If you finish early begin creating the code necessary to convert your form data into JSON objects.

---------------------


## Phase IV - For this fourth phase, aim to complete the following

* Backend Team:

Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

You should be using Postman to do all your testing at this point.

* Frontend Team:

Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests.

Then create the necessary code on your tables.html page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.

Then create the necessary code on your reserve.html page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data.

All: This is the most challenging part of today's activity. Be persistent! You can do this!

---------------------


## Phase V - For the fifth and final phase, aim to complete the following

All:
Complete any remaining functionality from the previous phase if you need more time.

Then, thoroughly test your application for bugs. Check if there are any obvious ways to crash the application.

Then, if you have more time -- begin to tackle any bonus of your choice:

* Add buttons for "checking off" individuals from the reservation list. Once this happens, the next person on the waitlist should be addd to the main reservation list.

* Add code to your server so that it "counts" every time a person visits any of the pages. Display a running count on the website.

* Add a button for sending emails to individuals on the wait-list letting them know they have a table ready. You will need to use node-mailer or a similar npm package to make this work. (A hard task, but very cool).

* Add a button for sending text messages to individuals on the wait-list letting them know they have a table ready. You will need to use the Twilio library to make this work. (A hard task, but very cool).

---------------------