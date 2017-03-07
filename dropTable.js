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

//function to drop table if need be
const dropEmployees = ()=>{
  db.run(`DROP TABLE employees`, (err)=>{
    errorHandler(err);
  })
}
//Comment out drop Employees function if not in use
dropEmployees()
