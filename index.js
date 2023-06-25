const express = require("express");
const knex = require("./db/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.post("/users", (req, res) => {
  knex("users")
    .insert({
      first_name: "penguin",
      last_name: "kil",
    })
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});

app.put("/users", (req, res) => {
  knex("users")
    .where("id", 1)
    .update({ last_name: "abcd" })
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});

app.delete("/users", (req, res) => {
  knex("users")
    .where("id", 1)
    .del()
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});

app.get("/users", (req, res) => {
  knex
    .select()
    .from("users")
    .then((users) => {
      res.send(users);
    });
});

app.listen("8080", () => {
  console.log("Server started at port 8080");
});
