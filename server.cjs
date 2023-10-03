// server.cjs
require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const app = express();

// Connect to database
require("./config/database.cjs");

//  logger middleware to log requests
app.use(logger("dev"));
// middleware to parse incoming JSON data
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "dist")));

// checkToken middleware - sets the req.user and req.esp properties on the request object
app.use(require("./config/checkToken.cjs"));

// API routes
const userRouter = require("./routes/api/users.cjs");
const noteRouter = require("./routes/api/note.cjs");

// Use the userRouter for routes starting with "/api/users"
app.use("/api/users", userRouter);

// Use the noteRouter for routes starting with "/api/note"
app.use("/api/note", noteRouter);

// Catch-all route to serve your React app's HTML file
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
