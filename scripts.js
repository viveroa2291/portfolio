const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Universal", "Acapulco, Mexico", "The Alamo", "The Arches", "Maggie Daley Park", "Milwaukee Bucs Game"];
const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
// headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0); 
function artsy() {
const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Door County", "Acapulco", "United States Capitol", "Cedar Point", "Chicago", "South Dakota"];
const headerDescritpions = ["This is an image of Anderson's Dock in Door County Wisconsin", "This is an image of Acapulco, Mexico driving into.", "This is an image of the United States Capitol in Washington, DC.", "This is an image of the entrance of Cedar Point in Sandusky, Ohio.", "This is an image of Chicago taken from the highway.", "This is an image of buffalos taken in South Dakota."];
const imageSource = ["images/doorCounty.jpeg", "images/acapulco.jpeg", "images/capital.jpeg", "images/cedarPoint.jpeg", "images/chicago.jpeg", "images/southDakota.jpeg"];
const linkTitles = ["home.html", "about.html", "contact.html", "story.html", "projects.html"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
// headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0);
}
function personal(){
const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Universal", "Acapulco, Mexico", "The Alamo", "The Arches", "Maggie Daley Park", "Milwaukee Bucs Game"];
const headerDescritpions = ["This is an image of me at Universal in Orlando Florida", "This is a picture of me in Acapulco Mexico.", "This is a selfie of me at the Alamo in San Antonio Texas.", "This is an image of me in the Arches National Park in Utah.", "This is an image of me ice skating with friends in Maggie Daley Park in Chicago.", "This is a picture of me at a Milwaukee Bucs game in Milwaukee."];
const imageSource = ["images/universal.jpeg", "images/acapulcoMe.jpeg", "images/alamo.jpeg", "images/arches.jpeg", "images/maggieDaley.jpeg", "images/bucs.jpeg"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
// headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0); 
}
function travel() {
const previousButton = document.getElementById('previous-button'); // The back button
const nextButton = document.getElementById('next-button'); // The next button
const headerDiv = document.getElementById('header'); // header title
const images = document.getElementById('images');
const descriptionDiv = document.getElementById('descriptionBody');

const headerTitles = ["Huntington Beach, California", "Forte De San Diego", "Harpers Ferry National Park", "United States Capitol", "Cleveland, Ohio", "Mount Rushmore, South Dakota"];
const headerDescritpions = ["This is a picture of me in Huntington Beach, California.",
 "This is a picture of me doing a handstand at the Forte of San Diego.", 
 "This is a picture of me in Harper's Ferry National Park.", 
 "This is a picture of me riding around the United States Capitol.",
  "This is a picture of me in Cleveland Ohio.", 
  "This is a picture of me in Mount Rushmore in South Dakota."];
const imageSource = ["images/california.jpeg", "images/forte.jpeg", "images/harpersFerry.jpeg", "images/capitolMe.jpeg", "images/cleveland.jpeg", "images/mountRushmore.jpeg"];
let s = 0;

function advance(delta) {
    s = (s + delta + headerTitles.length) % headerTitles.length;
    descriptionDiv.innerHTML = headerDescritpions[s];
    headerDiv.innerHTML = headerTitles[s];
// headerDiv.setAttribute("href", linkTitles[s]);
    images.src = imageSource[s];
}
previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0);  
}