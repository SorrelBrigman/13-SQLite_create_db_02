'use strict'

//require SQLite3
const sqlite3 = require(`sqlite3`).verbose();


//create new database
const db = new sqlite3.Database(`familyBusiness.sqlite`);


const errorHandler = (err)=>{
  if(err) {
    console.log(`Message: ${err}`);
  }
}
// Insert each of the employee objects into the database.
const populateEmployees = ()=>{

  const {employees} = require(`./employees.json`)

  employees.forEach((each)=>{
    db.run(`INSERT INTO employees VALUES(
      ${each.id},
      "${each.firstName}",
      "${each.lastName}",
      "${each.jobTitle}",
      "${each.address}",
      ${each.salary})`, (err)=>{
        errorHandler(err);
      })

  })
};


populateEmployees();
