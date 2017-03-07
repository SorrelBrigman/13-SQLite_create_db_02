'use strict'

//require SQLite3
const sqlite3 = require(`sqlite3`).verbose();


const errorHandler = (err)=>{
  if(err) {
    console.log(`Message: ${err}`);
  }
}


// Create a database that is saved on disk.

//create new database
const db = new sqlite3.Database(`familyBusiness.sqlite`);

//function to drop table if need be
const dropEmployees = ()=>{
  db.run(`DROP TABLE employees`, (err)=>{
    errorHandler(err);
  })
}
//Comment out drop Employees function if not in use
// dropEmployees()
// Create a table titled employees with the following columns:

// id, firstName, lastName, jobTitle, address
// db.run(`CREATE TABLE IF NOT EXISTS employees(id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)`, (err) => errorHandler(err));


// Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the employees table.

// eg: let array = [
//   { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
//   ...,
// ]


//Moved to json file for BONUS challenge
// let employeeArray = [
//   {id: 1, firstName: 'Jemma', lastName: 'Simmons', jobTitle: 'Scientist', address: 'Secret S.H.E.I.L.D. base' },
//   {id: 2, firstName: 'Phillip', lastName: 'Colson', jobTitle: 'Director', address: 'Secret S.H.E.I.L.D. base' },
//   {id: 3, firstName: 'Leopold', lastName: 'Fitz', jobTitle: 'Scientist', address: 'Secret S.H.E.I.L.D. base' },
//   {id: 4, firstName: 'Daisy', lastName: 'Johnson', jobTitle: 'Agent Quake', address: 'not disclosed' },
//   {id: 5, firstName: 'Melinda', lastName: 'May', jobTitle: 'Field Agent', address: 'on assignment' },
//   {id: 6, firstName: 'Alphonso', lastName: 'Mackenzie', jobTitle: 'Inhuman Director', address: 'Secret S.H.E.I.L.D. base' },
//   {id: 7, firstName: 'Bobbi', lastName: 'Morris', jobTitle: 'Field Agent', address: 'on assignment' },
//   {id: 8, firstName: 'Lance', lastName: 'Hunter', jobTitle: 'Hired Gun', address: 'Secret S.H.E.I.L.D. base' }
// ]




// Write a statement to query the database and console.log() all employee records.

db.all(`SELECT * FROM employees`, (err, allRows)=>{
  errorHandler(err);
  console.log(allRows);
});

// Write a statement to query the database and console.log() each employees jobTitle.
db.all(`SELECT jobTitle FROM employees`, (err, allRows)=>{
  errorHandler(err);
  console.log(allRows);
});

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
db.all(`SELECT firstName || " " || lastName AS Name, address FROM employees`, (err, allRows)=>{
  errorHandler(err);
  console.log(allRows);
});

// Write a statement that returns all employees of a specified jobTitle.

db.all(`SELECT firstName || " " || lastName AS Name, jobTitle FROM employees WHERE jobTitle = 'FieldAgent'`, (err, allRows) =>{
  errorHandler(err);
  console.log(allRows);
});
