var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST

var cityList = [
 
];

app.get('/', function (req, res) {
  res.render('meteo', {
    list : cityList
  });
});

app.post('/sortList', function (req, res) {
  var new_index = req.body.new_index;
  var old_index = req.body.old_index;

  cityListMove(old_index,new_index);

});

function cityListMove(fromIndex, toIndex) {
    var element = cityList[fromIndex];
    cityList.splice(fromIndex, 1);
    cityList.splice(toIndex, 0, element);
}

app.get('/add', function (req, res) {
  
  request("http://api.openweathermap.org/data/2.5/weather?q="+req.query.city+"&APPID=9b754f1f40051783e4f72c176953866e&units=metric&lang=fr", function(error, response, body) {
  
    body = JSON.parse(body);
    
    req.query.city     = body.name;
    req.query.temp_min = body.main.temp_min;
    req.query.temp_max = body.main.temp_max;
    req.query.picto    = body.weather[0].icon;
    req.query.description = body.weather[0].description;
    
    cityList.push(req.query);
  
    res.render('meteo', {
      list : cityList
    });
  
  });

 
});



app.get('/delete', function (req, res) {
  
  cityList.splice(req.query.indice, 1);
  
  res.render('meteo', {
    list : cityList
  });
});

app.listen(process.env.PORT || 80, function () {
  console.log("Server listening on port 80");
});