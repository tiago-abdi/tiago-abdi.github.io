

document.addEventListener('DOMContentLoaded', function () {
    const newQuoteBtn = document.querySelector('#new');
    const showAnswerBtn = document.querySelector('#js-tweet');
    newQuoteBtn.addEventListener('click', getQuote);
    showAnswerBtn.addEventListener('click', displayAnswer);

    const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    function getQuote() {
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayQuote(data.question);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('Error fetching quote. Please try again.');
            });
    }

    function displayQuote(quoteText) {
        const quoteTextElement = document.getElementById('js-quote-text');
        quoteTextElement.textContent = quoteText;
    }

    function displayAnswer() {
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const answerTextElement = document.getElementById('js-answer-text');
                answerTextElement.textContent = data.answer;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('Error fetching answer. Please try again.');
            });
    }

    function buttonClickHandler() {
        console.log('Button clicked!');
    }

    newQuoteBtn.addEventListener('click', buttonClickHandler);

    getQuote();
});