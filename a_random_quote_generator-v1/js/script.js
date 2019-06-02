/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
  Created array quotes with 5 object elements.
  The objects have 4 key pair - quote, source, citation, year.
*/

var quotes = [
  { 
    quote: "Only a life lived for others is a life worthwhile.",
    source: "Albert Einstein",
    citation: "Internet",
    year: 1943,
    tags: "Inspirational",
  },
  { 
    quote: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    source: "Sushant Singh Rajput",
    citation: "brainyquote.com",
    year: 2017,
    tags: "Life"
  },
  { 
    quote: "Goals transform a random walk into a chase.",
    source: "Mihaly Csikszentmihalyi",
    tags: "Ambition"
  },
  { 
    quote: "If you obey all the rules, you miss all the fun.",
    source: "Katherine Hepburn",
    year: 1977,
    tags: "Life advice"
  },
  { 
    quote: "Mistakes are part of the dues that one pays for a full life.",
    source: "Sophia Loren",
    citation: "Internet",
    tags: "Inspirational"
  },
];

/***
  function getRandomQuote(prod) uses math.floor and math.random methods to assign random number between 0 to 5 to var randomNum.
  It uses the .[] notation on the array to get the element at the corresponding index.
  Eg. if randomNum = 3, it will get the element at the 3 index of the array. 
***/

function getRandomQuote(prod) {
  var randomNum = Math.floor(Math.random() * 5);
  return prod[randomNum];
};

/*
setInterval is used to change the quote automatically every 25s, 
it only happens when the 'show another quote' button is not clicked.
*/
var intervalID = window.setInterval(printQuote, 25000);

/***
 printQuote() function has 3 var:
    - randomQuote:- uses the getRandomQuote(quotes) function, i.e it get a random object from the quotes array.
    - quoteString:- to build the html script string to be passes to index.html. this will display the random quote on the screen.
    - myDiv = document.getElementById("quote-box"):- it get the div on index.html file which would be updated with random data from quotes array.
 
 if conditional statements are used to ensure appropriate data for "citation" and "year" key value pair of the random object element is passed onto index.html.
  
 myDiv.innerHTML = quoteString is used to pass the new string data constructed to index.html. 
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var quoteString = "";
  var myDiv = document.getElementById("quote-box");
      quoteString += "<p class='quote'>"+ randomQuote.quote + "</p>";
      quoteString += "<p class= 'source'>" + randomQuote.source;
  if (randomQuote.citation){
      quoteString += "<span class='citation'>"+ randomQuote.citation + "</span>"
  } 
  if (randomQuote.year){
      quoteString += "<span class='year'>"+ randomQuote.year + "</span>"
  } 
       quoteString += "<span class='year'>"+ randomQuote.tags + "</span></p>"

      myDiv.innerHTML = quoteString
  /*
  to change the background color of index.html 
  eveytime we click 'show another quote' botton
  */
  var rand_bkg_color = (function() {

  // return rand from min included to max included
  var rand = function(min, max) {
  return Math.floor(Math.random() * (max-min+1)+min);
  }
  
  //returns a random rgb color code
  return function(){
  return 'rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
  };
  })();

  //changes the background colour of index.html.
  document.body.style.background =rand_bkg_color(); 
  };

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


