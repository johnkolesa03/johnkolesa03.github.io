const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['/wa/wa10/pic1.png','/wa/wa10/pic2.png','/wa/wa10/pic3.png','/wa/wa10/pic4.png','/wa/wa10/pic5.png',]

/* Declaring the alternative text for each image file */
const altText = {
  '/wa/wa10/pic1.png': 'Car on track',
  '/wa/wa10/pic2.png': 'Hallet with snow',
  '/wa/wa10/pic3.png': 'Helmet pic',
  '/wa/wa10/pic4.png': 'UMC snow',
  '/wa/wa10/pic5.png': 'Hallet sunset'
} 

for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');

  if (i === 0){
    newImage.style.borderRadius = '0 0 0 5px';
  } else if (i === images.length - 1) {
    newImage.style.borderRadius = '0 0 5px 0';
  } else {
    newImage.style.borderRadius = '0';
  }/* Looping through images */


  newImage.setAttribute('src', images[i]);
  newImage.setAttribute('alt', altText[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});