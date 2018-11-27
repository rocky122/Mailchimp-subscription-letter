/** Created by rocky122 on 27 November 2018 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const subscriptionController = require("./controllers/subscription");

const app = express();

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//static assets
app.use(express.static(path.join(__dirname, "public")));

//subscribe route
app.post("/register", subscriptionController.subscribeUser);

const port = process.env.PORT || 1221;
app.listen(port, () => console.log(`Listening on ${port} ....`));
