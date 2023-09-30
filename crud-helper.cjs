// Connect to the database
require("dotenv").config();
const db = require("./config/database.cjs");

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
const Note = require("./models/note.cjs");

// Local variables will come in handy for holding retrieved documents
let user, note;
let users, notes;

Note.create({
  user: "6514508ca54406fc7e8c21e1",
  content: "testing12345",
  title: "testing12345",
})
  .then((note) => {
    console.log(note);
  })
  .finally(() => {
    db.close();
  });

// setTimeout(() => {
//   db.close();
// }, 5000);
