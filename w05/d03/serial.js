var WSS = require( 'ws' )
.Server;
var server = new WSS(
  {
    port: 3000
  } );
  //Added fs as requirement
  var fs = require( 'fs' );
  var history = [];
  //added var file to point to history.txt
  var file = "history.txt";
  server.on( "connection", function ( ws )
  {
    //on connection history array joins and sends array elements as strings
    var historyMsg = history.join( "\n" );
    ws.send( historyMsg );
    ws.on( "message", function ( msg )
    {
      //on message push msg to  history array
      history.push( msg );

    } )
    ws.on( "close", function ()
    {
      //on close write to file to make sure last message gets added to array
      var historyMsg = history.join( "\n" );
      fs.writeFile( file, historyMsg, function ( err ) {} )
    } )
  } )



var WSS = require( 'ws' )
.Server;
var server = new WSS(
  {
    port: 3000
  } );
  //Added fs as requirement
  var fs = require( 'fs' );
  var history = [];
  //added var file to point to history.txt
  var file = "history.txt";

  server.on( "connection", function ( ws )
  {
    //on connection history array joins and sends array elements as strings
    var historyMsg = history.join( "\n" );

    ws.send( historyMsg );

    ws.on( "message", function ( msg )
    {
      //on message push msg to  history array

      history.push( msg );

      //on message write to file and historyMsg
      fs.writeFile( file, historyMsg, function ( err ) {} )
    }
  )
} )


// var WSS = require('ws').Server;
// var server = new WSS({port: 3000});
// var fs = require('fs');
// var history = [ ];
//
// server.on("connection", function(ws) {
//
//   fs.readFile("history", function(err, data) {
//     var msg =
//
//   ws.on("message", function(msg) {
//     history.push(msg);
//
//
//   });
//   var historyMsg = history.join("\n");
//   ws.send(historyMsg);
// })
