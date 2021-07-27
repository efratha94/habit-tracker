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

const corsFunc = function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*')
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
 res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

 next()
}

mongoose.connect(`${dbConnectionString}`, dbConnectionOpts)

process.env.ENV === "DEV" ? null : app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))




process.env.ENV === "DEV" ? app.use(corsFunc) : null

app.use("/", api)


process.env.ENV === "DEV" ? null : app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on 3000...');
});