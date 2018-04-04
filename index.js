const request = require('request');
const argv = require('yargs').argv;

let apiKey = '4f513b8abd93a4abcf55bfc35ff3db08';
let city = argv.c || 'Kuala Lumpur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if (err){
    console.log('error:', error);
  } else {
    // console.log('body:', body);
    
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
