


// console.log( "Forecast" );



const _request = require( "request" );


const _forecast = ( latitude, longitude , _forecast ) => {

   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude} , ${longitude}.json?access_token=pk.eyJ1IjoiZmluZXRhbGthYmxlIiwiYSI6ImNsN200aXpqODB4dHAzbnF6eGRvMm14djMifQ.VonCnelwcpoqgRgJ31DxpQ`;
 
   _request( {url , json: true } , ( error, res, body ) => {

  if( error ) {

  _forecast( "Forecast - Internet disabled" , undefined );

  }

  else if( res.body.features.length <= 0 ) {

  console.log( res.body.features.length );

  _forecast( "Forecast - There is an error in the URL" , undefined );

  }

  else {

  const { id , place_name } = res.body.features[0];

  const _forecasted_Data = `The Fetched Location is ${place_name} and its ID is ${id}`;

  _forecast( undefined , _forecasted_Data );

  }

   })


};


module.exports = _forecast;



// _forecast( -75.4652471468304, 42.751210955038 , ( error, _getData ) => {
  
//  if( error ) {

//   return console.log( error );

//  }

//  console.log( _getData );


// } );






