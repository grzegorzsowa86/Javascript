//Exercise 1
 const password = 'kaczka12';
 if(password.length > 7) {
  console.log('This is true');
 } else {
  console.log('This is false');
 }

 //Exercise 2

 //function heightTest() {
//  const height = prompt('what is Your height?');
const height = 170;
 if (typeof height !=='number') {
  console.log('Please enter a number');
  } else if (height >= 150) {
  console.log('You can go on the ride')
 } else {
  console.log('Sorry you are not tall enough');
 }
 

// heightTest();
 //Exercise 3
//Use prompt to ask user if he/she wants to play a game
//if user types Yes, run dice game, else console I'm not interested.
//alert - > You threw dice1 and dice2. result




const answer = prompt('Do You want to play');
if(answer.toLowerCase() === 'yes') {
  let dice1 = Math.floor(Math.random() * 6) +1;
let dice2= Math.floor(Math.random() * 6) +1;
let result;
console.log(dice1);
console.log(dice2);
if(dice1 === 6 && dice2 === 6) {
  result = 'You win a top prize: a bear';
} else if(dice1 === dice2) {
  result = 'You win three free throws';
} else if((dice1 + dice2) % 2 === 0) {
  result ='You get a free throw';
} else {
  result = 'You lose the game';
}
  alert(`You threw ${dice1} and ${dice2}. ${result}`)
} else { 
  alert('I\'m not interested')
}


//alert('This is alert in javascript');

