/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
    source: "Charlotte Bronte",
    citation: "Jane Eyre",
    year: 1847,
  },
  {
    quote:
      "The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything.",
    source: "L. Frank Baum",
    citation: " The Wonderful Wizard of Oz",
    year: 1900,
    tags: "Life",
  },
  {
    quote:
      "It has been said that the love of money is the root of all evil. The want of money is so quite as truly.",
    source: "Samuel Butler",
    citation: "Erewhon",
    year: 1872,
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    source: "Walt Disney",
    tags: "Life",
  },
  {
    quote:
      "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
    source: "Harper Lee",
    citation: "To Kill a Mockingbird",
    year: 1960,
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    tags: "Life",
  },
  {
    quote:
      "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.",
    source: "Jim Carry",
    tags: "Humor",
  },
  {
    quote:
      "If a crime is only punishable with a fine, then it is a punishment for the poor only.",
    source: "Pete David",
    citation: "Final Fantasy Tactics",
    year: 1998,
    tags: "Politics",
  },
];

/* Variable to store randomQuote button by id for event listener*/
const randomQuoteBtn = document.querySelector("#load-quote");
/* Variable to store DOM element that display random quotes used in the event listener below */
const randomQuoteElement = document.querySelector("#quote-box");
/* Variable to store DOM element that generate random colors used in the event listener below */
const randomColorElement = document.getElementById("main");

let interval;

/***
 * Initialize var with a random number between zero and the last index in the `quotes` array
 * Use the random number variable and bracket notation
 * to grab a random object from the `quotes` array, and store it in a variable
 * @param (arrayQuotes)
 * @returns (object) a random quote
 ***/

function getRandomQuote(arrayQuotes) {
  let randomNumber = Math.floor(Math.random() * arrayQuotes.length);
  // 2. Use the random number variable and bracket notation to grab a random object from the 'quote' array, and store in a variable
  let randomObject = arrayQuotes[randomNumber];
  return randomObject;
}

/***
 * Initialize and generate three random numbers for a rgb color
 * @returns (numbers) combination of three random numbers
 ***/

function generateRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

/***
 * Initialize and invoke a the randomQuote function & generateRandomColor function to assign a random
 * object to a string var HTML  and print out a random Quote whit a different background color. If statement 
 * to check if year & citation property exist, if it does, concatenate to the HTML string.
 ***/

function printQuote() {
  // Variable that calls the getRandomQuote() function
  let randomQuote = getRandomQuote(quotes);
  // Variable that calls the generateRandomColor() function
  let color = generateRandomColor();
  // Variable that creates a string 
  let html = `
          <p class="quote">${randomQuote.quote}</p>
          <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags) {
    html += `<span class="tags">${randomQuote.tags}</span>`;
  }

  html += `</p>`;

  //Set the innerHTML of the `randomQuoteElement` and `randomColorElement` html & color variable created above
  randomQuoteElement.innerHTML = html;
  //Setting the background according to the variable Color 
  randomColorElement.style.background = color;
      
}

// setInterval method to render the color and quote every 10 seconds 
interval = setInterval(printQuote, 10000);


//Initialize the reset function that clears the interval variable 
const reset = () => {
clearInterval(interval);
 
}

// Event Listener button that render a new quote & color with a click event
randomQuoteBtn.addEventListener("click", printQuote, false); 