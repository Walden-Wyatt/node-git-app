



//  console.log( "Hello git server" );

 // load express

 let _express =  require( 'express' );

 let _app = _express();

 // load path module

 let _path = require("path" );



 // loading geocode and forecast

 const _geocode = require("./utils/geocode.js" );

 const _forecast = require( "./utils/forecast.js" );




 // setting up configurations for templete hbs files

 _app.set( "view engine" , "hbs" );

 _app.set("views" , _path.join( __dirname , "/templetes_hbs" ));

 _app.engine( "hbs" , require( "hbs").__express );




 // setting up partials

 const _hbs = require("hbs" );

 _hbs.registerPartials( _path.join( __dirname, "/partials" ));






 // loading static assets


  _app.use( _express.static( _path.join( __dirname , "/static_assets" )));




 // setting up routes

 _app.get( "/" , (req, res, next ) => {

//   res.send( "Home page" );

res.render( "index" , { _prop: "Index Page" } );

  
 });


 _app.get( "/about" , ( req, res, next ) => {

  res.render( "about" , { _prop: " " } );

 });


 _app.get( "/weather" , ( req, res, next ) => {

  
  if( !req.query.address ) {

  res.send( { error: "You must provide Querry String" } );

  }

  else {

  const _address = req.query.address;

  _geocode( _address , ( error, { latitude, longitude } = {} ) => {

  if( error ) {

  return res.send(  {error } );

  }

  _forecast( latitude, longitude, ( error, _forecast_Data ) => {

  if(error) {

  return res.send( {error} );

  }

  res.send( { _forecast_Data } );

  } );

  });
  }
  

 });


 // setting up route for 404 page not found

  _app.get( "*" , (req, res, next ) => {

  res.render( "404Page" , { _prop: "404 Page not Found" } );

  });





 // create server using _app

 _app.listen( 4000 , () => {

  console.log("Server running in the port 4000" );

 })







