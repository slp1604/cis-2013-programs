/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

//Prompt user to input the minimum number
intMin = parseInt(prompt("Choose the lower number in the range. It must be at least zero."));
//Validate the minimum number (it must be greater than zero)
while (intMin < 0 || isNaN(intMin))
    {
    //prompt user to input a new minimum number
    intMin = parseInt(prompt("You entered an invalid number. Try again."));
    }






/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

//Prompt user to input max number
intMax = parseInt(prompt("Choose the higher number in the range. It must be two higher than your lower number (" + intMin + ")."));
//Validate the max number (it must be 2 more than the minimum number)
while (intMax < (intMin + 2) || isNaN(intMax))
    {
    //prompt user to input a new max number
    intMax = parseInt(prompt("You entered an invalid number. Try again."));
    }







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 1;


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

//Prompt user to input their guess
intGuess = parseInt(prompt("Enter your guess (Range = " + intMin + " - " + intMax + "):"));
//Validate that user input is a number and is between the Min and Max
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
    {
    //prompt user to input a new guess
    intGuess = parseInt(prompt("You entered an invalid number. Try again. (Range = " + intMin + " - " + intMax + ")"));
    }





/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

//Create loop to test if the user guess does not equal the user number
while (intGuess != intRandom)
{
    //if the guess is less than the random number notify user that it is too low
    if (intGuess < intRandom)
    {
        alert("Your choice of " + intGuess + " is too low. Try again.");
    }
    //if guess is greater than the random number notify user that it is too high
    else
    {
        alert("Your choice of " + intGuess + " is too high. Try again.");
    }
//ask user for a new guess
intGuess = parseInt(prompt("Enter your new guess (Range = " + intMin + " - " + intMax + "):"));
//add one to the counter to track a new guess attempt
intCount++;
}
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
