/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(prod) {
  var randomNum = Math.floor(Math.random() * 5);
  return prod[randomNum];
};

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var quoteString = "";
  var myDiv = document.getElementById("quote-box");
      quoteString += "<p class='quote'>"+ randomQuote.quote + "</p>";
      quoteString += "<p class= 'source'>" + randomQuote.source + "</p>";
  if (randomQuote.citation != " "){
      quoteString += "<span class='citation'>"+ randomQuote.citation + "</span>"
  } else {
       quoteString += "<span class='citation'>Unknown</span>"
  }
  if (randomQuote.year != null){
      quoteString += "<span class='year'>"+ randomQuote.year + "</span>"
  } else {
       quoteString += "<span class='year'>Unknown</span>"
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