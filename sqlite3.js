'use strict'

const sqlite3 = require('sqlite3').verbose();

const errorHandler = (err)=>{
  if(err) {
    console.log(`Message: ${err}`);
  }
}


// Create a database that is saved on disk.

// Create a table titled employees with the following columns:

// id, firstName, lastName, jobTitle, address
// Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the employees table.

// eg: let array = [
//   { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
//   ...,
// ]
// Insert each of the employee objects into the database.

// Write a statement to query the database and console.log() all employee records.

// Write a statement to query the database and console.log() each employees jobTitle.

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
