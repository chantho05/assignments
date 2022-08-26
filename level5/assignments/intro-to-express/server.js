const express = require("express");
const app = express();

// Endpoint (mount path)
// Callback function

// const users = [
//   { name: "Mike", age: 32 },
//   { name: "Mike", age: 32 },
//   { name: "Mike", age: 32 },
//   { name: "Mike", age: 32 },
//   { name: "Mike", age: 32 },
// ];

app.use("/", express.json()); //looks for request body

const movies = [
  { title: "The Goofy Movie", genre: "cartoon" },
  { title: "The Goofy Movie", genre: "cartoon" },
  { title: "The Goofy Movie", genre: "cartoon" },
  { title: "The Goofy Movie", genre: "cartoon" },
  { title: "The Goofy Movie", genre: "cartoon" },
];

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.post("/movies", (req, res) => {
  console.log(req);
});

//PORT / CB
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
