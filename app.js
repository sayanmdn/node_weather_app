const yargs = require ('yargs');
//const request = require ('request');
const geocode= require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
var lat;
var lng;
const argv = yargs
.options({
  a:{
    demand: true,

    alias: 'address',
    describe:'"address of the location" to fetch weather for',
    string: true
  }
})
.help()
.alias('h','help')
.argv;
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  }else {
    console.log(JSON.stringify(results,undefined,2));
    lat= results.lalitude;
    lng= results.longitude;
    weather.weatherCondition(lat, lng, (errorMessage,results) =>{
      if (errorMessage){
        console.log(errorMessage);
      } else {
        console.log(JSON.stringify(results,undefined,2));
        console.log('Temperature in celsius is '+(results.Temperature-32)*5/9);

      }
    } );
  }
});


//console.log(argv);
