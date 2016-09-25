module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('Recebida a requisicao');
        res.send('OK.');
    });

    app.post('/pagamentos/pagamento', function(req, res) {
        var pagamento = req.body;
        console.log(pagamento);
        res.send('ok.');
    })
}