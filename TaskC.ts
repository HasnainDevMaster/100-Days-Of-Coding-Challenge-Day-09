// 100 Days Of Coding Challenge!

/** Question 27:
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

*If the alien is green, print a message that the player earned 5 points.
* If the alien is yellow, print a message that the player earned 10 points.
* If the alien is red, print a message that the player earned 15 points.
* Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//-------------------------------------------------------------------------------------------------------------

// Initialize the alien's color
let alien_color_2 = "green"; // Changed the variable name to avoid confusion with the previous question

// Check the alien's color and assign points accordingly
if (alien_color_2 == "green") {
  console.log("Congratulations! You earned 5 points."); // If green, earn 5 points
} else if (alien_color_2 == "yellow") {
  console.log("Congratulations! You earned 10 points."); // If yellow, earn 10 points
} else if (alien_color_2 == "red") {
  console.log("Congratulations! You earned 15 points."); // If red, earn 15 points
}

// Change the alien's color to yellow
alien_color_2 = "yellow";

// Check again and assign points
if (alien_color_2 == "green") {
  console.log("Congratulations! You earned 5 points."); // If green, earn 5 points
} else if (alien_color_2 == "yellow") {
  console.log("Congratulations! You earned 10 points."); // If yellow, earn 10 points
} else if (alien_color_2 == "red") {
  console.log("Congratulations! You earned 15 points."); // If red, earn 15 points
}

// Change the alien's color to red
alien_color_2 = "red";

// Check once more and assign points
if (alien_color_2 == "green") {
  console.log("Congratulations! You earned 5 points."); // If green, earn 5 points
} else if (alien_color_2 == "yellow") {
  console.log("Congratulations! You earned 10 points."); // If yellow, earn 10 points
} else if (alien_color_2 == "red") {
  console.log("Congratulations! You earned 15 points."); // If red, earn 15 points
}
