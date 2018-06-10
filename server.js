const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/apiRoutes.js')(app); 
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});