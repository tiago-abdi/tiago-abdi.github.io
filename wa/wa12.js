function fetchData(endpoint, callback) {
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('Error fetching quote. Please try again.');
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const newQuoteBtn = document.querySelector('#new');
    newQuoteBtn.addEventListener('click', getQuote);

    const tweetBtn = document.querySelector('#tweet');
    tweetBtn.addEventListener('click', tweetQuote);

    const apiEndpoint = 'https://api.quotable.io/random';

    function getQuote() {
        fetchData(apiEndpoint, displayQuote);
    }

    function displayQuote(quoteData) {
        const quoteTextElement = document.getElementById('js-quote-text');
        quoteTextElement.textContent = quoteData.content;
    }

    function tweetQuote() {
        const quoteText = document.getElementById('js-quote-text').textContent;
        const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}&hashtags=RandomQuote`;
        window.open(twitterURL, '_blank');
    }

    function buttonClickHandler() {
        console.log('Button clicked!');
    }

    newQuoteBtn.addEventListener('click', buttonClickHandler);

    getQuote();
});


