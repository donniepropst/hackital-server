Street = require('../models/').Street;
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
    find(req, res){
        var name = req.query.streetName;
        Street.findAll({where: {streetName: name}}).then(function(streets){
            if(streets){
                res.send({success: true, data: streets})
            }else{
                res.send({success: false, message: 'No data for your street'});
            }
        })
    }
}
