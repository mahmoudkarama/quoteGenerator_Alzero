let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteTxt = document.querySelector(".quote-text");
let quoteId = document.querySelector(".quote-id");
let quoteAuthor = document.querySelector(".quote-author");
let autoStatus= document.querySelector(".auto-status");

let intervalId;

generateBtn.onclick = generateQuotes;
autoBtn.onclick = startAuto;
stopBtn.onclick= stopAuto;

async function getQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data;
}

console.log(getQuotes());

async function generateQuotes() {
    let quotes = await getQuotes();
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteTxt.innerHTML = quote.text;
    quoteAuthor.innerHTML = quote.author.slice(0, quote.author.indexOf(","));
    quoteId.innerHTML = quotes.indexOf(quote) + 1;
}

function startAuto() {
    intervalId = setInterval(generateQuotes, 3000);
    autoStatus.innerHTML= "Auto: ON";
}

function stopAuto() {
    clearInterval(intervalId);
    autoStatus.innerHTML = "";
}