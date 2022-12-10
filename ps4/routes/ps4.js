const express = require('express');
const router = express.Router();

const config = require('../configuration.js');
const request = require('request');
const http = require('http');

const fetch = require('node-fetch')


//b. A route on a POST method that retrieves data from an external API.
// The route must use Promises to
// manage the async http call. Use the 'request' package as your HTTP client
// (with the understanding that it is deprecated). Wrap the request in a
// Promise


router.get("/", function (req, res) {
    res.render("input");
});

router.post('/promise', function(req, res, next){
    const lat = req.body.lat;
    const lon = req.body.lon;
    console.log(lat);
    console.log(lon);

    const url =  "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon+ "&exclude=hourly,daily&appid=02a0726fd3ccbef70267c5e1e2d42678";
    console.log(url);
    return new Promise((resolve, reject) => {
        request(url, function(error, response){
            if (response){
                console.log(JSON.parse(response.body));
                const data = JSON.parse(response.body);
                resolve(JSON.parse(response.body));


            }else{
                console.error('error:', error);
            }
        });
    })
        .then(
            response => {
                res.send(response)}

        ).then(
            response => {
                res.render('ps4', {response: response})
            }
        )



})

//c. A second route, similar to the one in b. that uses async/await syntax
// rather than Promises. You can hit the same API endpoint as b. Use 'nodefetch' for this one.

router.post('/async', async function(req, res, next){
    const lat = req.body.lat;
    const lon = req.body.lon;
    console.log(lat);
    console.log(lon);
    const url =  "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon+ "&exclude=hourly,daily&appid=02a0726fd3ccbef70267c5e1e2d42678";
    const response = await fetch(url);
    const data = await response.json();
    res.render('ps4', {temperature: data.main.temp});

});


//d. A third route, similar to b. and c., that uses a callback to handle the async
// API call. For this one, use the 'request' package. It's fine to hit the same
// endpoint.

router.post('/callback', function(req, res,next){
    const lat = req.body.lat;
    const lon = req.body.lon;
    console.log(lat);
    console.log(lon);
    const url =  "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon+ "&exclude=hourly,daily&appid=02a0726fd3ccbef70267c5e1e2d42678";
    request(url, function(error, response, body){
        if (error){
            console.error('error', error);
        }
        const data = JSON.parse(body);
        res.render('ps4', {temperature: data.main.temp});
    });
});



module.exports = router;
