import generateName from "sillyname";
import superheroes from "superheroes";

var sillyname = generateName();

console.log(`My name is ${sillyname}.`);

var superhero = superheroes.random();

console.log(`I am ${superhero}!`);
