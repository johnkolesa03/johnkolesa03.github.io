
const button = document.querySelector("#js-new-quote");
button.addEventListener('click', reload);

const button2 = document.querySelector("#js-new-quote2");
button2.addEventListener('click', reload);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(59));

P= getRandomInt(59)+1;

function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt2(36));

N= getRandomInt2(36)+1;

function reload() {
    location.reload();
  }

const endpoint = "https://swapi.dev/api/planets/"+P+"/?format=json";
const endpoint2 = "https://swapi.dev/api/species/"+N+"/?format=json";


async function getQuote() {

    try{
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();

        displayQuote(json.name);
        displayAnswer(json.answer);

    }
    catch (err){
        console.log(err);
        alert('Failed to fetch new Trivia');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function displayAnswer(quote){
    const answerText = document.querySelector("#js-answer-text");
    Text.textContent = quote;
}
getQuote();

async function getQuote2() {

    try{
        const response = await fetch(endpoint2)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();

        displayQuote2(json.name);
        displayAnswer2(json.answer);

    }
    catch (err){
        console.log(err);
        alert('Failed to fetch new Trivia');
    }
}

function displayQuote2(quote){
    const quoteText2 = document.querySelector("#js-quote-text2");
    quoteText2.textContent = quote;
}

function displayAnswer2(quote){
    const answerText2 = document.querySelector("#js-answer-text2");
    Text.textContent = quote;
}

getQuote2();