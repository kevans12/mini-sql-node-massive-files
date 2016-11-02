var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://postgres:PW@localhost/sandbox";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);

var controller = require('./controller'); //have to call after our export

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});

controller.getPlanes();

// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// app.get('/planes', function(req, res) {
//   db.get_planes([25],function(err, planes){
//     res.status(200).send(planes)
//   })
// });
