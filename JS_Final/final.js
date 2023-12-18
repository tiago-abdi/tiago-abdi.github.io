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
    regenerateButton.onclick = () => regenerateDigit(regenerateButton);

    generateButtonsDiv.appendChild(regenerateButton);
  }
}

function regenerateDigit(button) {
  const newDigit = getRandomDigit();
  const phoneNumberDiv = document.getElementById('phoneNumber');
  const digits = phoneNumberDiv.getElementsByClassName('phoneNumber');

  const buttonIndex = Array.from(button.parentElement.children).indexOf(button);

  if (buttonIndex !== -1) {
    digits[buttonIndex].textContent = newDigit;
  }
}

function startTimer() {
  let seconds = 60;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    timerElement.textContent = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up! I'll make it easier for you...";

      generatePhoneNumber();

      setTimeout(() => {
        seconds = 60;
        startTimer();
      }, 2000); 
    }
  }

  updateTimer();
  
  const timerInterval = setInterval(updateTimer, 1000);
}

function moveButtonsRandomly() {
  const generateButtonsDiv = document.getElementById('generateButtons');
  const buttons = generateButtonsDiv.getElementsByClassName('generateButton');

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (const button of buttons) {
    button.velX = random(-5, 5); 
    button.velY = random(-5, 5); 
    button.style.position = 'absolute';
    button.style.left = random(0, window.innerWidth - button.offsetWidth) + 'px';
    button.style.top = random(0, window.innerHeight - button.offsetHeight) + 'px';
  }

  function updateButton(button) {
    const rect = button.getBoundingClientRect();

    if ((rect.right + button.velX) >= window.innerWidth || (rect.left + button.velX) <= 0) {
      button.velX = -(button.velX); 
    }

    if ((rect.bottom + button.velY) >= window.innerHeight || (rect.top + button.velY) <= 0) {
      button.velY = -(button.velY); 
    }

    button.style.left = (rect.left + button.velX) + 'px';
    button.style.top = (rect.top + button.velY) + 'px';
  }

  function moveButtons() {
    for (const button of buttons) {
      updateButton(button);
    }

    requestAnimationFrame(moveButtons);
  }

  moveButtons(); 
}

function showPhoneNumberPopup() {
  const phoneNumberDiv = document.getElementById('phoneNumber');
  const digits = phoneNumberDiv.getElementsByClassName('phoneNumber');
  const phoneNumberArray = Array.from(digits).map(digit => digit.textContent).join('');

  alert(`Phone number ${phoneNumberArray} was submitted!`);
}

function showCookiesPopup() {
  const cookiesPopup = document.getElementById('cookiesPopup');
  cookiesPopup.style.display = 'block';
}

function acceptCookies() {
  const cookiesPopup = document.getElementById('cookiesPopup');
  cookiesPopup.style.display = 'none';

  // Set a flag in localStorage to indicate that cookies are accepted
  localStorage.setItem('cookiesAccepted', 'true');
}

function showPopupEvery5Seconds() {
  setInterval(() => {
    showCookiesPopup();
  }, 5000);
}

window.onload = () => {
  startTimer();
  generatePhoneNumber();
  moveButtonsRandomly();
  showPopupEvery5Seconds(); // Add this line to start showing the popup every 5 seconds

  const submitButton = document.getElementById('submitBtn');
  submitButton.onclick = showPhoneNumberPopup;

  // Check if the user has already accepted cookies
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  // If cookies are not accepted, show the cookies popup
  if (!cookiesAccepted) {
    showCookiesPopup();
  }

  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
  acceptCookiesBtn.onclick = acceptCookies;
};


