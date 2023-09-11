const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;


// set the view engine to ejs
app.set('view engine', 'ejs');


// sendFile will go here
app.get('/', function(req, res) {
    const person = {
        name: "toan",
        email: "toan@mgaila",
        password: "gwaoeighaioeghaw"
    }
//   res.sendFile(path.join(__dirname, '/index.html'));
res.render('index', { person: person });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);