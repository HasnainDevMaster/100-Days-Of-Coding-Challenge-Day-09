"use strict";
// 100 Days Of Coding Challenge!
/** Question 25:
Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

* Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
*Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
//-----------------------------------------------------------------------------------------------------------------------------------
// Version 1: Alien color is green (passes the if test)
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color = "green";
// Write an if statement to test whether the alien’s color is green.
if (alien_color === "green") {
    // If it is, print a message that the player just earned 5 points.
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
// Version 2: Alien color is not green (fails the if test)
let alien_Color_fail = "yellow"; // Assigning the alien's color to 'yellow'
// Check if the alien's color is green
if (alien_Color_fail === "green") {
    // Print a message if the alien's color is green
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
