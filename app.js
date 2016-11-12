var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var environment = require('node-env-file');
try{
    environment(__dirname + '/.config.env');
}catch(e){

}
var api = require('./api/api.js');
var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/client'));

var appPath = path.join(__dirname+'/client/index.html');
app.get('/', function(req, res){
    res.sendFile(appPath);
});

api.init(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port some port(locally is 3000)')
})
