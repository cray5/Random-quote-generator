/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*
  Created array quotes with 5 object elements.
  The objects have 4 key pair - quote, source, citation, year.
  Empty strings values are showm by " ".
  Empty number values are shown by null.
*/

var quotes = [
  { 
    quote: "Only a life lived for others is a life worthwhile.",
    source: "Albert Einstein",
    citation: "Internet",
    year: 1943,
  },
  { 
  quote: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
  source: "Sushant Singh Rajput",
  citation: "brainyquote.com",
  year: 2017,
  },
  { 
    quote: "Goals transform a random walk into a chase.",
    source: "Mihaly Csikszentmihalyi",
    citation: " ",
    year: null,
  },
  { 
    quote: "If you obey all the rules, you miss all the fun.",
    source: "Katherine Hepburn",
    citation: " ",
    year: 1977,
  },
  { 
    quote: "Mistakes are part of the dues that one pays for a full life.",
    source: "Sophia Loren",
    citation: "Internet",
    year: null,
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

/***
 printQuote() function has 3 var:
    - randomQuote:- uses the getRandomQuote(quotes) function, i.e it get a random object from the quotes array.
    - quoteString:- to build the html script string to be passes to index.html. this will display the random quote on the screen.
    - myDiv = document.getElementById("quote-box"):- it get the div on index.html file which would be updated with random data from quotes array.
 
 if else conditional statements are used to ensure appropriate data for "citation" and "year" key value pair of the random object element is passed onto index.html.
  
 myDiv.innerHTML = quoteString is used to pass the new string data constructed to index.html. 
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var quoteString = "";
  var myDiv = document.getElementById("quote-box");
      quoteString += "<p class='quote'>"+ randomQuote.quote + "</p>";
      quoteString += "<p class= 'source'>" + randomQuote.source;
  if (randomQuote.citation != " "){
      quoteString += "<span class='citation'>"+ randomQuote.citation + "</span>"
  } else {
       quoteString += "<span class='citation'>Unknown</span>"
  }
  if (randomQuote.year != null){
      quoteString += "<span class='year'>"+ randomQuote.year + "</span></p>"
  } else {
       quoteString += "<span class='year'>Unknown</span></p>"
  }

      myDiv.innerHTML = quoteString 
};

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.