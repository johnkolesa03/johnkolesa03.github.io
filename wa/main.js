const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 69 fahrenheit outside, so :insertx: went to do some big flips. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing and was like damn this is off the chain — :insertx: weighs 300 pounds, and is doing some big backflips.';
const insertX = ['Willem Defoe', 'Doc. Oc', 'J.K.Simmons'];
const insertY = ['Ohio', 'Spain', 'the moon'];
const insertZ = ['left', 'did a my fair lady glow up', 'did a star wars'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('420 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

