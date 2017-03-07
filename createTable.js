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

db.run(`CREATE TABLE IF NOT EXISTS employees(id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)`, (err) => errorHandler(err));
