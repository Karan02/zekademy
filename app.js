const cors = require("cors");
const routes = require("./routes/routes");
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyparser = require("body-parser");
const connectDB = require('./database/connection');
connectDB();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/",routes);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');