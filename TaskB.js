"use strict";
// 100 Days Of Coding Challenge!
/** Question 26:
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

* If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
* If the alien’s color isn’t green, print a statement that the player just earned 10 points.
* Write one version of this program that runs the if block and another that runs the else block.*/
//---------------------------------------------------------------------------------------------------------------
// Version 1: Alien color is green, runs the if block
let alien_color_1 = "green";
// Declare a variable alien_color (Changed variable name to avoid confusion with the previous question) and assign it a value of 'green'
if (alien_color_1 === "green") {
    // Check if the alien's color is green,The player earns 5 points for shooting a green alien
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
else {
    // This block will not be executed in this scenario
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
// Version 2: Alien color is yellow, runs the else block
let alien_Color_1_fail = "yellow"; // Assigning an alien's color to 'yellow'
if (alien_Color_1_fail === "green") {
    // Check if the alien's color is green
    // This block will not be executed in this scenario
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
else {
    // The player earns 10 points for shooting a non-green alien
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
