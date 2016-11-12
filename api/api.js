var models = require('./../models/');
var seeder = require('./seeder');

var express = require('express');
var api = express.Router();

var street = require('./street');

function init(app){
    models.sequelize.authenticate().then(function(){
        console.log('success, connected to database');
    }).catch(function(error){
        console.log('error', error);
    });
    
    seeder.seed();



    app.use('/api', api);
    openRoutes();
}

function openRoutes(){
    api.get('/street/find', street.find);
}

module.exports.init = init;
