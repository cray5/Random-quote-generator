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
    quote: "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.",
    source: "Helen Mirren",
    citation: "www.brainyquote.com/topics/random",
    year: 2010,
  },
  { 
  quote: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
  source: "Sushant Singh Rajput",
  citation: "www.brainyquote.com/topics/random",
  year:2012 ,
  },
  { 
    quote: "Goals transform a random walk into a chase.",
    source: "Mihaly Csikszentmihalyi",
    citation: "www.brainyquote.com/topics/random",
    year: 1992,
  },
  { 
    quote: "Life just doesn't care about our aspirations, or sadness. It's often random, and it's often stupid and it's often completely unexpected, and the closures and the epiphanies and revelations we end up receiving from life, begrudgingly, rarely turn out to be the ones we thought.",
    source: "Khaled Hosseini",
    citation: "www.brainyquote.com/topics/random",
    year: 1990 ,
  },
  { 
    quote: "There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.",
    source: "Jeff Greenfield",
    citation: "www.brainyquote.com/topics/random",
    year: 2002,
  },
];

console.log(quotes);
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(prod) {
  var randomNum = Math.floor(Math.random() * 5);
  return prod[randomNum].quote;
  
};
console.log(getRandomQuote(quotes));

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




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);*/


// Remember to delete the comments that came with this file, and replace them with your own code comments.