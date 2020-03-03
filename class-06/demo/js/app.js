'use strict';
console.log('Pet Adoption project go!');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have: 
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals


var petOne = {

  name: 'Fluffy',
  breed: 'maine coon',
  age: 0,
  imageName: 'diabloBlanco',
  interests: ['Sun light', 'Mouse Toys', 'CatNip'],
  isGoodWithKids: false,
  isGoodWithDogs: true,
  isGoodWithCats: false,
  setAge:   function() {
    this.age = randomAge(3, 12) + ' Months';
  }
};
petOne.setAge();


var petTwo = {

  name: 'Tiger',
  breed: 'Tiger',
  age: 0,
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge:   function() {
    this.age = randomAge(3, 12) + 'Months';
  }
};
petTwo.setAge();

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

petOne.isFixed = true;
petTwo.isFixed = true;



//Create DOM elements and render it in html

//create a new element the parent element of the child element that we will create to render the pet article in the html

var parentElement = document.getElementById('kittenProfiles');

//inside that element article, h2, p, ul, li, interests, image.


//Create Article
var article = document.createElement('article');
console.log(article);
parentElement.appendChild(article);

// Create h2
var h2 = document.createElement('h2');
//Talk about this
h2.textContent = petOne.name;
article.appendChild(h2);

// Create p
var petParagraph = document.createElement('p');
petParagraph.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old.';
article.appendChild(petParagraph);


// Create ul
var petUl = document.createElement('ul');
article.appendChild(petUl);
//forgot the array
for (var i = 0; i < petOne.interests.length; i++ ){
  //Create li
  console.log(petOne.interests);
  var petLi = document.createElement('li');
  // fill in lists
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);
}





//add image
var petImage = document.createElement('img');

//set some values on the images
petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petImage.setAttribute('alt', 'Cute kitty huh? adopt now.');
article.appendChild(petImage);




