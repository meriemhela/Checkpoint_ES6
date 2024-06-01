/*
----- Exo 1 : Vowels Counter

let chaine = prompt("enter a string:");
chaine = chaine.split(" ").join("");
let total = 0;
for (let i = 0; i < chaine.length; i++) {
  switch (chaine[i]) {
    case "a":
      total += 1;
      break;
    case "e":
      total += 1;
      break;
    case "i":
      total += 1;
      break;
    case "o":
      total += 1;
      break;
    case "u":
      total += 1;
      break;
  }
}
console.log(total);

----- Exo 2 : Even or Odd

let number = prompt("enter a number:");
if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

----- Exo 3 : Get the Middle Character

let chaine = prompt("enter a string :");
chaine = chaine.split(" ").join("");
if (chaine.length % 2 == 0) {
  console.log(
    `the middels characters in this string with length = ${
      chaine.length
    } are : ""${
      chaine[chaine.length / 2 - 1] + chaine[chaine.length / 2]
    }"" in the ${chaine.length / 2 - 1} & ${chaine.length / 2} positions`
  );
} else {
  console.log(
    `the middel character in this string with length = ${
      chaine.length
    } is : ""${chaine[chaine.length / 2 - 0.5]} "" in the ${
      chaine.length / 2 - 0.5
    }  positions `
  );
}

----- Exo 4 : Opposite number

let number = prompt("enter a number : ");
console.log(`the opposite number is : ${number * -1}`);

----- Exo 5 : Mumbling
exemple : accum("abcd") -> "A-Bb-Ccc-Dddd"


let chaine = prompt("enter a string");
let Mumbling = "";
Mumbling = Mumbling + chaine[0].toLocaleUpperCase();
for (let i = 1; i < chaine.length; i++) {
  Mumbling =
    Mumbling +
    "-" +
    chaine[i].toLocaleUpperCase() +
    chaine[i].toLocaleLowerCase().repeat(i); //repeat(i) -> chaine se repete i foiss
}
console.log(Mumbling);

---- Exo 6 : Perfect Square 

let number = prompt("enter a number");
if (number < 0 || number == 0) {
  console.log(`${number} is not a perfect square`);
} else {
  for (let i = 1; i < number; i++) {
    square = i * i;
    if (square == number) {
      console.log(
        `${number} is a perfect square because ${number} = ${i}*${i}`
      );
      break;
    }
  }
}

---- Exo 7 : Disemvowel Trolls 
exemple : "This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!".

function Disemvowel(chaine) {
  let trolls = "";
  for (let i = 0; i < chaine.length; i++) {
    if (!"aeiouAEIOU".includes(chaine[i])) {
      trolls += chaine[i];
    }
  }
  return trolls;
}

let chaine = prompt("Enter a string");
console.log(Disemvowel(chaine));

---- Exo 8 : Highest and Lowest
*/
