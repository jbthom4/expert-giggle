// Collect input from a user
let userLowNumber = prompt(`Random Number generator: 
Please select your your Lowest number.`);
let userHighNumber = prompt('Please select your your Highest number.');



// Convert the input to a number
userLowNumber = parseInt(userLowNumber);
userHighNumber = parseInt(userHighNumber);
differenceOfHighLow = userHighNumber - userLowNumber;

//determine that high nimber is higher than low number
if ( differenceOfHighLow < 1) {
document.querySelector('main').innerHTML =`Sorry, Your high number (${userHighNumber}) is less than or equal to your low number (${userLowNumber}).  Hit refresh to try again.`;
  //make sure user input does not produce a NaN error.
} else if(userLowNumber && userHighNumber){ 
  //Ues Math.random() and user's number to generate a random number.
const randomNumber = Math.floor((Math.random() * (differenceOfHighLow +1)) + userLowNumber) ;
// Create a message displaying the random number
document.querySelector('main').innerHTML =`<h2>Your random number from ${userLowNumber} - ${userHighNumber} is: ${randomNumber}<br>Hit refresh to try again.</h2>`;
// Use else statement to prompt user to input only numbers.
} else { document.querySelector('main').innerHTML = `<h2>You need to provide 2 numbers.
Hit refresh to try again.</h2>`;

}
