var MongoClient = require('mongodb').MongoClient;

function createCollection(url, name) {
    console.log("db create process...");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbOwner = db.db("remote");
        dbOwner.createCollection(name, function (err, res) {
            if (err) throw err;
            console.log("collection created!");
            db.close();
        });
    });
};

function getAllGamers(url) {
    console.log("processing...");
    return new Promise(function (resolve, reject) {

        console.log("connecting...");

        MongoClient.connect(url, function (err, db) {
            var dbo = db.db("remote");
            var query = {};
            console.log("fetching...");
            dbo.collection("gamers")
                .find(query)
                .toArray(function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("we have gamers now...")
                        resolve(result)
                    }
                    db.close();
                });
        });
    })
};

function insertDesigner(url,content){
    console.log("inserting...");
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbOwner=db.db("remote");
        dbOwner.collection("designers").insertOne(content,function(err,res){
            if(err)throw err;
            console.log("a new designer inserted");
            console.log("ID : %s",res.insertedId);
            db.close();
        });
    });
};

function insertDesigners(url,content){
    console.log("inserting...");
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbOwner=db.db("remote");
        dbOwner.collection("designers").insertMany(content,function(err,res){
            if(err)throw err;
            console.log("%i documents inserted",res.insertedCount);
            db.close();
        });
    });
};

function main() {
    url = "mongodb://username:password@cluster0-shard-00-00-m2yq0.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true"
    var designers=[
        {fullName:"blue man",country:"ingland",system:"oceanic continent",expLevel:256},
        {fullName:"Reddick",country:"red sun",system:"world",expLevel:128},
        {fullName:"mari dö marş",country:"pari",system:"moon",expLevel:45}
    ];
    insertDesigners(url,designers);

    //var vanDyk={fullName:"Yurri van dayk de la rossa",country:"green age",system:"Tatuin",expLevel:980};
    
    //insertDesigner(url,vanDyk);
    
    //createCollection(url,"designers");

    /*
    getAllGamers(url).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
    */
    console.log("mongodb examples...")
};

main();
