var express = require('express')
var router = express.Router()

// ------------------Tratamento dos pedidos-------
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('getInput')
  })
router.get('/input', function(req, res, next) {
  res.render('getInput')
})

router.post('/input', function(req, res, next){
    var query = req.body.intext
    client.query(query)
        .execute()
        .then(function (qres) {
            console.log('\n\n\n')
            console.log(JSON.stringify(qres))
            res.json(qres)
        })
        .catch(function (error) {
            console.log('ERRO: ' + error)
    })
})

module.exports = router;
