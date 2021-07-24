const cors = require('cors');
const express = require('express');
const app = express();
const path = require("path")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/habit-tracker", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })
const api = require("../server/api/api")


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use("/", api)

app.listen(3001, () => {
  console.log('Listening on 3001...');
});