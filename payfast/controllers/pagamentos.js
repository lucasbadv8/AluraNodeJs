module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('Recebida a requisicao');
        res.send('OK.');
    });

    app.post('/pagamentos/pagamento', function(req, res) {
        var pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');
        pagamento.status = 'Efetuado';
        pagamento.dataPagamento = new Date;
        console.log(pagamento);
        app.locals.db.collection('pagamentos').insert(pagamento);
        res.send(pagamento);
    })
}