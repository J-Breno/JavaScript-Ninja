"use strict";

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var users = [
  {
    username: "joao",
    name: "João",
    age: 30,
  },
  {
    username: "maria",
    name: "Maria",
    age: 22,
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
  // resquestt são os dados que vem lá do front quando eu requisetei a url, o o response é a resposta que eu vou devolver para o servidor

  res.send("<h1>Home</h1>");
});

app.get("/user", function (req, res) {
  res.send("User");
});

app.get("/user/breno", function (req, res) {
  res.send("<h1>User Breno</h1>");
});

app.get("/user/:username", function (req, res) {
  var username = req.params.username;
  var hasUser = users.some(function (user) {
    return user.username === username;
  });
  console.log(hasUser);

  if (hasUser) {
    return res.json(
      users.filter(function (user) {
        return user.username === username;
      })[0]
    );
  }

  if (users[username]) {
    return res.json(users[username]);
  }
  res.status(404).json({ error: "Usuário não encontrado" });
});

app.post("/user", (req, res) => {
  var username = req.body.username;
  var age = req.body.age;
  var user = req.body.user;

  var hasUser = users.some(function(user) {
    return user.username === username;
  })

  if(!hasUser) {
    users.push({
        username: username,
        age: age,
        user: user
      })
  }


  res.json(users);
});

app.listen(3000);
