const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);




const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


async function getQuote() {

    try{
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();

        displayQuote(json.question);
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