




const _input = document.querySelector("input");
const _form = document.querySelector("form" );
const _forError = document.querySelector("#_forError" );
const _actualData = document.querySelector( "#_actualData" );


 _form.addEventListener( "submit" , (ev) => {

 ev.preventDefault();


 const _address = _input.value;

 const _url = `https://busy-pear-kitten-sari.cyclic.app/weather?address=${_address}`;

 fetch( _url  ).then( (response) => {

  response.json().then( (data) => {

 if( data.error ) {

    _forError.textContent = data.error;

    _actualData.textContent = " ";
  
 }

 else {

  _forError.textContent = " ";

  _actualData.textContent = data._forecast_Data;
  

 }

  })
 })
 });












