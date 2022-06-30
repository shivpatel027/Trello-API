const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("welcome to the trello backend!");
});
// Require routes
const boardRoutes = require('./src/routes/board.route')
const listRoutes = require('./src/routes/list.route')
const loginRoutes = require('./src/routes/login.route')

// using as middleware
app.use('/board', boardRoutes)
app.use('/list', listRoutes)
app.use('/login', loginRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});