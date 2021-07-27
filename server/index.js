require('dotenv').config({ path: '../.env' });
const dbConnectionString = process.env.ENV === "DEV" ? process.env.MONGO_CONNECTION_STRING : process.env.ATLAS_CONNECTION_STRING
const cors = require('cors');
const express = require('express');
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const api = require("../server/api/api")

const dbConnectionOpts = {
  socketTimeoutMS: 0,
  connectTimeoutMS: 0,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
// console.log(process.env.ATLAS_PASS, dbConnectionString, process.env.ATLAS_CONNECTION_STRING)
mongoose.connect(`${dbConnectionString}`, dbConnectionOpts)

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

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on 3001...');
});