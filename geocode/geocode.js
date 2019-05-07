const request = require ('request');

var geocodeAddress = (address, callback) => {
var givenAddress = encodeURIComponent(address);
var encodedURL= 'https://maps.googleapis.com/maps/api/geocode/json?address=' + givenAddress ;
//console.log(encodedURL);
request({
  url: encodedURL,
  json: true
}, (error,responce,body) => {
  if(error){
    callback("Unable to connect to google server")
  } else if (body.status==='ZERO_RESULTS'){
    callback("Unable to locate the address");
  } else if (body.status==='OK'){
    callback(undefined,{
      address: body.results[0].formatted_address,
      lalitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    })
  }
});
};

module.exports.geocodeAddress = geocodeAddress;
