const express = require('express');
const router= express.Router();


//part b: use GET method that return a fixed string.
//        the string is a JSON object with one key/value pair
//        pass into Pug template ps3render
router.get('/', function(req, res, next){
    res.render('ps3partb', {string_b: 'Hey now'});
})

//part c: use POST method returns a response and gets its parameter from the request body rather than URL string
router.post('/', function(req, res, next){
    //console.log(req.body);
    let news = req.body.stringParam
    const length = news.length
    res.render('ps3partc', {string_c: news, len: length});
} )


//part d
router.get('/names/:parameter', function(req, res, next){
    const string_d = req.params.parameter;
    res.render('ps3partc', {string_d: string_d});
} )


module.exports = router;
