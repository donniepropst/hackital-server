Street = require('../models/').Street;
var request = require('request');

module.exports = {

    create(street){
        Street.create(street).then(function(street){
            console.log('added')
        }).catch(function(error){
            console.log('bad stuff on data init');
        });
    },
    isInitalized(){
        return Street.findOne({ where: {id: 1} });
    },


    findAddress(req, res){
        var latitude = req.query.latitude;
        var longitude = req.query.longitude;
        var query = {
            latlng: latitude +','+longitude,
            key: process.env.GOOGLE_API_KEY
        }
        //39.3109829,-76.610916
        request.get({url: 'https://maps.googleapis.com/maps/api/geocode/json', qs:query}, function (error, response, body) {
          if (!error && response.statusCode == 200) {
             var name = JSON.parse(body).results[0].address_components[1].short_name + '.';
             var blockNumber = JSON.parse(body).results[0].address_components[0].short_name;
             Street.findAll({where: {streetName: name}}).then(function(streets){
                 if(streets){
                     var candidates = [];
                     streets.map(function(element){
                        var number = element.block;
                        if(blockNumber > number - 100 && blockNumber < number + 100){
                            candidates = candidates.push(element);
                        }
                     });
                     if(candidates.length == 0){
                         res.send({success: false, message: 'No data for your street',streetNumber: blockNumber, streetName: name});
                     }else{
                        res.send({success: true, rules: candidates, streetNumber: blockNumber, streetName: name});
                     }
                 }else{
                     res.send({success: false, message: 'No data for your street'});
                 }
             })
          }
      });

    }
}
