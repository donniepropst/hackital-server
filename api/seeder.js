var streetInitialization = require('./street');
var fs = require('fs');
var path = require('path');

var parkingFileData = __dirname + '/../data/parking.json';

function seed(){
    streetInitialization.isInitalized().then(function(s){
        if(!s){
            fs.readFile(parkingFileData, 'utf8', function(err, result) {
               JSON.parse(result).data.map(function(element){
                   if(element[12] && element[13]){
                       var street = {};
                       street.area = element[8];
                       street.name = element[9];
                       street.block = element[10];
                       street.direction = element[11];
                       street.streetName = element[12] + '' + element[13];
                       street.side = element[14];
                       street.restrictions = element[15];
                       streetInitialization.create(street);
                   }else{
                       //skip the broken/blank rows in the data
                   }
               });
           });
       }
   });
}

module.exports.seed = seed;
