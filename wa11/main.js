const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

var images = [
    { src: "images/kurtdominican.jpg", alt: "Kurt Caz in the Dominican Republic" },
    { src: "images/baldyturtle.jpg", alt: "Baldy finds turtle man" },
    { src: "images/haroldbaldr.jpeg", alt: "Harold Baldr walking on mountain range path" },
    { src: "images/baldyrussia.jpg", alt: "Baldy in the middle of nowhere Russia" },
    { src: "images/kurtwithbeer.jpeg", alt: "Kurt Caz drinking a beer on a canoe" }
];

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i].src);
    newImage.setAttribute('alt', images[i].alt);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function () {
        displayedImage.setAttribute('src', images[i].src);
        displayedImage.setAttribute('alt', images[i].alt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    overlay.classList.toggle('dark-overlay');
});



