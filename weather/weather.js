const request = require ('request');
var weatherCondition = (lat, lng, callback) => {
//var givenAddress = encodeURIComponent(address);
var encodedURL= 'https://api.darksky.net/forecast/2164b054baafd4500a0dbe1a44b40004/' + lat+','+lng ;
//console.log(encodedURL);
request({
  url: encodedURL,
  json: true
}, (error,responce,body) => {
  if(error){
    callback("Unable to connect to darkSky server")
  } else {
    callback(undefined,{
      Summary: body.currently.summary,
      Temperature: body.currently.temperature,
      Humidity: body.currently.humidity
    })
  }
});
};
module.exports.weatherCondition = weatherCondition;
