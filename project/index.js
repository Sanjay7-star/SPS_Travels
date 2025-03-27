var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbmy = db.db('mydbfirst');
    var mydata = {name: 'MaanavaN.com,website:www.maanavan.com'};

    dbmy.collection('webusers').insertOne(mydata, function(err, res){
        if(err) throw err;
        console.log('Document inserted')
        db.close();
    });


});