var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/payfast';
var db;
MongoClient.connect(url, function(erro, database) {
    if (erro) {
        console.log('Nao consegui me conectar a um mongoDB server. Erro:', erro);
    } else {
        console.log('Conexao estabelecida em', url);
        db = database;
        return database;
    }
});


module.exports = function() {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.locals.db = db;
    consign()
        .include('controllers')
        .then('persistencia')
        .into(app);
    return app;
}