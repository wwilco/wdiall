var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response ) {
  path = request.url;
  console.log( request.url );
  // fs.readFile( "index.js", function ( err, data1 ) {
  fs.readFile( "index.html", function ( err, data1 ) {
    var index = data1.toString()
    var books = [];
    var i = 0;
    var Book = function ( name, filename, url_name, author, image_link ) {
      this.name = name;
      this.filename = filename;
      this.url_name = url_name;
      this.author = author;
      this.image = image_link;
      this.createHTML = function ( index ) {
        fs.readFile( filename, function ( err, data2 ) {
          var text = data2.toString();
          var lines = text.replace( /\n/g, '<br>' )
          var newtext = '<p>' + lines + '</p>';
          var bookHtml = index.replace( "REPLACEME", newtext )
          // var link = '<a href=' + url_name + '>book</a>';
          // console.log(link)
          // var newHTML = bookHtml.replace( "@@", link )
          console.log( "Hey" )
          response.end( bookHtml )
        } )
      }
    }
    var Life_of_Chopin = new Book( "Life of Chopin", "Life_of_Chopin.txt", "/Life_of_Chopin", "Franz Liszt", "http://ecx.images-amazon.com/images/I/51-pei3JoUL._SY344_BO1,204,203,200_.jpg" )
    books.push( Life_of_Chopin );
    for (var i = 0; i < books.length; i++) {
      if ( path === "/" || path === "/favicon.ico" ) {
        var link = '<a id="batman" href="' + books[i].url_name + '">book</a>';
        console.log(link)
        var newHTML = index.replace( '<a id="batman">Book</a>', link )
        response.end( newHTML )
      }
      if ( path === books[ i ].url_name ) {
        books[ i ].createHTML( index )
      }
    };
  } )
} )
server.listen( 2000 );
