const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res){
res.json({title: "Document content title.", text: "Document content text."});
});

app.post('/register', function(req, res){
console.log(req.body);
res.json({msg: "Done"});
});

app.listen(3000);