const express = require('express');
const app = express();
var request = require("request");
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

//home page
app.get('/', function (req, res) {
    //console.log('Express Start');
    //res.send('hello Nodejs');
    res.render('index')
})

//quran page
app.get('/quran', function (req, res) {
    res.render('quran')
})

app.get('/quran/verse', function (req, res) {

    var options = {
        method: 'GET',
        url: 'https://api.quran.com/api/v4/quran/verses/uthmani',
        body: '{}'
    };

    request(options, function (error, response, body) {
        if (error) console.log('problem in API');

        let verses = JSON.parse(body);

        //console.log(verses);
        res.render('verse', { verses: verses })
    });
})

const server = app.listen('3000', function () {
    console.log('The Server is Working');
});