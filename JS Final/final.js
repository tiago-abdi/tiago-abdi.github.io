function getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }
  
  function generatePhoneNumber() {
    const phoneNumberDiv = document.getElementById('phoneNumber');
    const generateButtonsDiv = document.getElementById('generateButtons');
  

    phoneNumberDiv.innerHTML = '';
    generateButtonsDiv.innerHTML = '';
  

    for (let i = 0; i < 10; i++) {
      const digit = getRandomDigit();
  
      const digitSpan = document.createElement('span');
      digitSpan.classList.add('phoneNumber');
      digitSpan.textContent = digit;
  
      phoneNumberDiv.appendChild(digitSpan);

      if ((i + 1) % 3 === 0 && i !== 8) {
        phoneNumberDiv.appendChild(document.createTextNode(' '));
      }
  
  
      const regenerateButton = document.createElement('button');
      regenerateButton.classList.add('generateButton');
      regenerateButton.textContent = 'Regenerate';
      regenerateButton.onclick = () => regenerateDigit(digitSpan);
  
 
      generateButtonsDiv.appendChild(regenerateButton);
    }
  }
  
  
  function regenerateDigit(digitSpan) {
    const newDigit = getRandomDigit();
    digitSpan.textContent = newDigit;
  }
  
  function startTimer() {
    let seconds = 30;
    const timerElement = document.getElementById('timer');
  
    function updateTimer() {
      timerElement.textContent = seconds;
      seconds--;
  
      if (seconds < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time\'s up!';
  
        // Reset all numbers
        generatePhoneNumber();
  
        setTimeout(() => {
          seconds = 30;
          startTimer();
        }, 2000); // Lag 2 seconds before starting again
      }
    }
  
    
    updateTimer();
  // Update timer every second ( i think)
    const timerInterval = setInterval(updateTimer, 1000);
  }
  
  function submitPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').innerText;
    console.log('Submitted phone number:', phoneNumber);
  }
  
  // Start the timer when the page is loaded
  window.onload = () => {
    startTimer();
    generatePhoneNumber(); 
  };
  
  