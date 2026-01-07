const quotes = [
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Do not watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  }
];


document.getElementById("qouteBtn").addEventListener("click", function(){
    // console.log("quote");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    
    quote.innerText = quotes[randomIndex].quote
    author.innerText = quotes[randomIndex].author
})