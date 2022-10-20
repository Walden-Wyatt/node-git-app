







const _input = document.querySelector("input");
const _form = document.querySelector("form" );
const _forError = document.querySelector("#_forError" );
const _actualData = document.querySelector( "#_actualData" );


 _form.addEventListener( "submit" , (ev) => {

 ev.preventDefault();

 const _address = _input.value;

 const _url = `http://localhost:4000/weather?address=${_address}`;

 fetch( _url  ).then( (response) => {

  response.json().then( (data) => {

  console.log( data );

  })
 })
 });












