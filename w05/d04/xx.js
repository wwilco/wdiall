var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response ) {
  path = request.url;
  console.log( request.url );
  fs.readFile( "index.html", function ( err, data1 ) {
    var index = data1.toString()
    if ( path === "/" || path === "/favicon.ico" ) {
      response.end(index)
    }
    else if ( path === "/Life_of_Chopin" ) {

      var Book = function(name, url_name){
        this.name = name;
        this.url_name = url_name;

        this.createHTML = function(index){
          if (path === this.url_name){
            fs.readFile( this.name , function ( err, data2 ) {
              var text = data2.toString();
              lines = text.replace( /\n/g, '<br>' )
              text = '<p>' + lines + '</p>';
              var bookHtml = index.replace( "REPLACEME", text )
              response.end( bookHtml )} )

            }}}

            var Life_of_Chopin = new Book("Life of Chopin", "/Life_of_Chopin")

        // fs.readFile( "Life_of_Chopin.txt", function ( err, data2 ) {
        //   var text = data2.toString();
        //   lines = text.replace( /\n/g, '<br>' )
        //   text = '<p>' + lines + '</p>';
        //   var bookHtml = index.replace( "REPLACEME", text )
        //   response.end( bookHtml )
        // } )
      }
    }
  )})
  ;
  server.listen( 2000 );


  // var Book = function(name, url_name){
  //   this.name = name;
  //   this.url_name = url_name;
  //   this.createHTML = function(index){
  //     if (path === this.url_name){
  //       fs.readFile( this.name , function ( err, data2 ) {
  //         var text = data2.toString();
  //         lines = text.replace( /\n/g, '<br>' )
  //         text = '<p>' + lines + '</p>';
  //         var bookHtml = index.replace( "REPLACEME", text )
  //
  //         response.end( bookHtml )} )
  //       }}}
  //       var Life_of_Chopin = new Book("Life of Chopin", "/Life_of_Chopin")
  //
  //
  //
  //
  //       var http = require( "http" );
  //       var fs = require( "fs" );
  //       var server = http.createServer( function ( request, response ) {
  //         path = request.url;
  //         console.log( request.url );
  //         fs.readFile( "index.html", function ( err, data1 ) {
  //           var index = data1.toString()
  //           if ( path === "/" || path === "/favicon.ico" ) {
  //             response.end(index)}
  //             else if ( path === "/Life_of_Chopin" ) {
  //               fs.readFile( "Life_of_Chopin.txt", function ( err, data2 ) {
  //                 var text = data2.toString();
  //                 lines = text.replace( /\n/g, '<br>' )
  //                 text = '<p>' + lines + '</p>';
  //                 var bookHtml = index.replace( "REPLACEME", text )
  //                 response.end( bookHtml )
  //               } )
  //             }
  //           }
  //         )})
  //         ;
  //         server.listen( 2000 );
  //
  // //
  // // var http = require( "http" );
  // // var fs = require( "fs" );
  // // var server = http.createServer( function ( request, response ) {
  // //   path = request.url;
  // //   console.log( request.url );
  // //   if ( path === "/" || path === "/favicon.ico" ) {
  // //     fs.readFile( "index.html", function ( err, data1 ) {
  // //       var index = data1.toString()
  // //       if ( path === "Life_of_Chopin" ) {
  // //         fs.readFile( "book.txt", function ( err, data2 ) {
  // //           var text = data2.toString();
  // //           lines = text.replace( /\n/g, '<br>' )
  // //           // var para = text.split('\n\n\n');
  // //           // text = para.join('</p><p>');
  // //           text = '<p>' + lines + '</p>';
  // //           var bookHtml = index.replace( "REPLACEME", text )
  // //           // var finalHtml = bookHtml.replace(/\"/g, "")
  // //           // console.log(finalHtml);
  // //           response.end( bookHtml )
  // //         } )
  // //       }
  // //     } )
  // //   }
  // // } );
  // // server.listen( 2000 );
  //
  // //first solution
  //
  // // var fs = require('fs');
  // // var http = require('http');
  // //
  // // var server = http.createServer(function(request, response){
  // //   fs.readFile("index.html", function(err, data){
  // //     var page = data.toString();
  // //     fs.readFile("book.txt", function(err, data){
  // //       var d = data.toString()
  // //       var books = page.replace("REPLACE ME", d)
  // //       console.log(books)
  // //       response.end(books)
  // //     })
  // //   })
  // // })
  // // console.log("accomplished")
  // //
  // // server.listen(2000)
  //
  //
  // //gabe's code
  //
  // // var http = require("http");
  // // var fs = require("fs");
  // // var server = http.createServer(function(request,response){
  // //   console.log(request.url);
  // //   if(request.url ==="/" || request.url ==="/life_of_chopin"){
  // //       fs.readFile("index.html",function(err,data){
  // //         var page = data.toString();
  // //         response.end(page);
  // //       })
  // //     }
  // //     else {
  // //         fs.readFile(request.url.substring(1,request.url.length),function(err,data){
  // //           var page = data.toString();
  // //           response.end(page);
  // //         })
  // //       }
  // //     });
  // //     server.listen(2000);
  
