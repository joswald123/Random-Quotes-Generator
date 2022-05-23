/*** 
 * `quotes` array 
***/
const quotes = [
  {
      quote: "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
      source: " ~Charlotte Bronte",
      citation: "Jane Eyre",
      year: 1847
  },
  {
      quote: "What necessity is there to dwell on the Past,",
      source: " ~Jane Eyre",
      citation: "(Charlotte Bronte, 1847, p. 265)",
      year: 1848
  },
  {
      quote: "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
      source: " ~Jane Eyre"
  },
  {
      quote: "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
      source: " ~Jane Eyre",
      citation: "(Charlotte Bronte, 1847, p. 265)",
      year: 1850
  },
  {
      quote: "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
      source: " ~Jane Eyre"
  },
  {
      quote: "What necessity is there to dwell on the Past, when the Present is so much surer—the Future so much brighter?",
      source: " ~Jane Eyre",
      citation: "(Charlotte Bronte, 1847, p. 265)",
      year: 1852
  }
];

/* Variable to store randomQuote button by id for event listener*/
const randomQuoteBtn = document.querySelector('#load-quote');
console.log(randomQuoteBtn);

/* Variable to store DOM element that display random quotes used in the event listener below */
const randomQuoteElement = document.querySelector('#quote-box');
/* Variable to store DOM element that generate random colors used in the event listener below */
const randomColorElement = document.getElementById("main")


/***
  * Initialize var with a random number between zero and the last index in the `quotes` array
  * Use the random number variable and bracket notation 
  * to grab a random object from the `quotes` array, and store it in a variable
  * @param (arrayQuotes) 
  * @returns (object) a random quote
  ***/

function getRandomQuote(arrayQuotes) {
  let randomNumber = Math.floor(Math.random()*arrayQuotes.length);
  // 2. Use the random number variable and bracket notation to grab a random object from the 'quote' array, and store in a variable
  let randomObject = arrayQuotes[randomNumber];
  return randomObject;     
}

/***
* Initialize and generate three random numbers for a rgb color 
* @returns (string) random code for a rgb color
***/

function generateRandomColor() {

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}


randomQuoteBtn.addEventListener('click', () => {

  // Variable that calls the getRandomQuote() function
  let randomQuote = getRandomQuote(quotes);
  // Variable that calls the generateRandomColor() function
  let color = generateRandomColor();

  
  /***
  * Initialize and invoke a the randomQuote function to assign a random 
  * object to a string var HTML  and print out a random Quote. If statement to check if year 
  * & citation property exist, if it does, concatenate to the HTML string.
  * 
  * @param (objet) randomQuote function
  * @returns (string) HTML string with the randomObject
  ***/

  function printQuote(randomQuote) {

      let html = `
           <p class="quote">${randomQuote.quote}</p>
           <p class="source">${randomQuote.source}   
       `;

       if (randomQuote.citation) {
           html += `<span class="citation">${randomQuote.citation}, </span>`;

       } 
       
       if (randomQuote.year) {
           html += `<span class="year">${randomQuote.year}</span> </p>`;
       } else {
           html += `</p>`
       }
       
      
      return html;
  }

  // 
  randomQuoteElement.innerHTML = printQuote(randomQuote);
  randomColorElement.style.backgroundColor = color


});


