Notes on jQuery

>Attributes
The .attr() method acts as both a getter and a setter.
+As a setter, .attr() can accept either a key and a value,
or an object containing one or more key/value pairs.

$( "a" ).attr( "href", "allMyHrefsAreTheSameNow.html" );
$( "a" ).attr({
  title: "all titles are the same too!",
  href: "somethingNew.html"
});

+As a getter:
$( "a" ).attr( "href" ); // Returns the href for the first a element in the document


>Selecting Elements
The most basic concept of jQuery is to "select some elements and do something with them."
jQuery supports most CSS3 selectors, as well as some non-standard selectors.
Wherever possible, make selections using IDs, class names, and tag names.

> select element by id
$( "#myId" ); // Note IDs must be unique per page.

> select elements by class
$( ".myClass" );

>select Elements by Attribute
$( "input[name='first_name']" ); // Beware, this can be very slow in older browsers

>Selecting Elements by Compound CSS Selector
$( "#contents ul.people li" );

>Pseudo-Selectors
$( "a.external:first" );
$( "tr:odd" );
// Select all input-like elements in a form (more on this below).
$( "#myForm :input" );
$( "div:visible" );
// All except the first three divs.
$( "div:gt(2)" );
// All currently animated divs.
$( "div:animated" );

>Elements that have not been added to the DOM will always be considered hidden,
even if the CSS that would affect them would render them visible.

>The best way to determine if there are any elements is to test the
selections .length property, which tells you how many elements were selected.
If the answer is 0, the .length property will evaluate to false when used as a boolean value:

// Testing whether a selection contains elements.
if ( $( "div.foo" ).length ) {
  ...
}

>Saving Selections
jQuery doesnt cache elements for you. If youve made a selection that you might
need to make again, you should save the selection in a variable rather than
making the selection repeatedly.
var divs = $( "div" );
A selection only fetches the elements that are on the page at the time the
selection is made. If elements are added to the page later, youll have to
repeat the selection or otherwise add them to the selection stored in the variable.
Stored selections dont magically update when the DOM changes

>Selectng Form Elements, some examples
$( "form :button" );
$( "form :input" );

<Getters & Setters
jQuery "overloads" its methods, so the method used to set a value generally has
the same name as the method used to get a value. When a method is used to set a value,
its called a setter.
When a method is used to get (or read) a value, its called a getter.
Setters affect all elements in a selection.
Getters get the requested value only for the first element in the selection.

// The .html() method used as a setter:
$( "h1" ).html( "hello world" );

// The .html() method used as a getter:
$( "h1" ).html();

<Chaining
If you call a method on a selection and that method returns a jQuery object,
you can continue to call jQuery methods on the object without pausing for a semicolon.
This practice is referred to as "chaining":

$( "#content" )
.find( "h3" )
.eq( 2 )
.html( "new text for the third h3!" );
