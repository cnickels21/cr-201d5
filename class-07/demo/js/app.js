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


// var petOne = {

// name: 'Fluffy',
// breed: 'maine coon',
// age: 0,
// imageName: 'diabloBlanco',
// interests: ['Sun light', 'Mouse Toys', 'CatNip'],
// isGoodWithKids: false,
// isGoodWithDogs: true,
// isGoodWithCats: false,
// setAge: function () {
//   this.age = randomAge(3, 12) + ' Months';
// }
// };
//petOne.setAge();


function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats)  {
  this.name = name;
  this.breed = breed;
  this.age = this.setAge();
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}


//Pet.prototype.functionName = function(any, parameters, can, go, here)
//Now, any pet created withthe Prt constructor will be able to call this method.

Pet.prototype.setAge = function() {
  this.age = randomAge(3,12) + ' months';
};

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

Pet.prototype.getInterests = function() {
  var randomIndex = Math.floor(Math.random() * this.interests.length);
  return this.interests[randomIndex];
};

//Create some DOM elements and then render them to the index. 
Pet.prototype.render = function() {

  //Grab the Parent element 
  var parentElement = document.getElementById('kittenProfiles');
  //create child elements article, h2, p, ul, li, interests and image

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  var petParagraph = document.createElement('p');
  petParagraph.textContent = `${this.name} is adorable, and is ${this.age} old.`;
  article.appendChild(petParagraph);


  var ul = document.createElement('ul');
  article.appendChild(ul);

  for(var i = 0; i < this.interests.length; i++){

    var li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!, no TODAY!');
  article.appendChild(img);


  var animalTable = document.getElementById('animal-table');


  var petRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  petRow.appendChild(nameCell);

  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  var ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  var interestsCell = document.createElement('td');
  interestsCell.textContent = this.getInterests();
  // interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  animalTable.appendChild(petRow);

};


var firstPet = new Pet('Nova','Lab', 'labradorDog', ['chewy toys', 'playin keep away', 'Blue Eyes', 'good girl'], true, true, true);
firstPet.setAge();
firstPet.getInterests();
var secondPet = new Pet('Tiger','American shorthair', 'diabloBlanco', ['inquisitive', 'needy', 'small', 'whiskery'], true, true, true);
secondPet.setAge();
secondPet.getInterests();
var thirdPet = new Pet('Iggy', 'iguana', 'littleDragon', ['green', 'scaly', 'chill', 'dragony'], true, true, true);
thirdPet.setAge();
thirdPet.getInterests();
var adoptPet = [firstPet, secondPet, thirdPet];

//loop through the objects to show some information on the page. 
for(var i = 0; i < adoptPet.length; i++){
  adoptPet[i].render();
}





