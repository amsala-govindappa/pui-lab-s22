function Giraffe(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "giraffe";
  this.image = "giraffe.png";
}

function Pig(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "pig";
  this.image = "pig.png";
}

function Owl(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "owl";
  this.image = "owl.png";
}

let animals = [new Giraffe(), new Pig(), new Owl()];
let names = ["Isabella", "Anna", "Custard", "Toast", "Vanilla", "Fluffy", "Bella"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Giraffe)
  {
    return new Giraffe(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Pig)
  {
    return new Pig(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Owl)
  {
    return new Owl(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return getRandomIndex(2);
}

function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}