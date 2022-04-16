const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Door County", "Acapulco", "United States Capitol", "Cedar Point", "Chicago", "South Dakota"];
const headerDescritpions = ["This is an image of Anderson's Dock in Door County Wisconsin", "This is an image of Acapulco, Mexico driving into.", "This is an image of the United States Capitol in Washington, DC.", "This is an image of Chicago taken from the highway.", "This is an image of buffalos taken in South Dakota."];
const imageSource = ["images/doorCounty.jpeg", "images/acapulco.jpeg", "images/capital.jpeg", "images/cedarPoint.jpeg", "images/chicago.jpeg", "images/southDakota.jpeg"];
const linkTitles = ["home.html", "about.html", "contact.html", "story.html", "projects.html"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
   // descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
   // headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0);
