var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/myDb';

module.exports = function() {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    consign()
        .include('controllers')
        .into(app);
    return app;
}

MongoClient.connect(url, function(erro, db) {
    if (erro) {
        console.log('Nao consegui me conectar a um mongoDB server. Erro:', erro);
    } else {
        console.log('Conexao estabelecida em', url);
        db.close();
    }
});