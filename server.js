const express = require('express');
// Initialise Express
var app = express();
const http = require( 'http' ).createServer( app );

// Render static files
app.use(express.static('public'));

app.get( '/', function( req, res ) {
    console.log('inside slash');
    res.sendFile( __dirname + '/public/index.html' );
});

const port = process.env.PORT || 8080;
// Port website will run on
http.listen(port, function(){
    console.log('port connected on ', port);
});