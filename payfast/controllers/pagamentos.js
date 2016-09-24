module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('Recebida a requisicao');
        res.send('OK.');
    });
}