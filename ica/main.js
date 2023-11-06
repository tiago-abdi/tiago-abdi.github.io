const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = "It was 9:00pm at night. :insertx: went for a walk around the CU campus when suddenly, :inserty: jumped out of a bush and killed him. There was one man who saw it all, and his name was :insertz:. Although standing at 6'8, he wasn't noticed by the killer. He told sheriff Hamood, figure it out!";

const insertx = [
  "Khalifa",
  "Fat-Ed-Din",
  "Abdullah"
];

const inserty = [
  "Mansoori",
  "Hymar",
  "Trajah"
];

const insertz = [
  "Abdi",
  "Hassem",
  "Youssef"
];


randomize.addEventListener('click', result);

function result() {

  let newStory = storyText
    .replace(':insertx:', randomValueFromArray(insertx))
    .replace(':inserty:', randomValueFromArray(inserty))
    .replace(':insertz:', randomValueFromArray(insertz))
    .replace('Hammod', customName);
  
  const isUK = document.getElementById("uk").checked;
  
  if (isUK) {
    newStory = newStory.replace("9:00pm", "21:00")
    newStory = newStory.replace("6'8", "193cm");;
  }
  
  if (customName.value !== '') {
    newStory = newStory.replace("Hamood", customName.value);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

