// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const name = ["Guadalupe", "Ollie", "Aki"];
let messages = [];

function writeCards(names, surprise) {
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
    messages.push(message);
  }
  return messages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number --;
  }
}