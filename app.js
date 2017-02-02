// Get the express module
var express = require('express')

// Get the app object
var app = express()

// A route for '/'. Another words
// whenever HTTP GET to https://host:port/
// is requested the callback function,
// the second parameter, is invoked. Here
// we use the response parameter, res, to
// return the string 'Hello world!'.
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Have the server, app in this case, start
// listening on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
