// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const createSVG = require("./lib/createSVG");
// Define a set of questions to ask the user
const questions = [
    {
        type: "list",
        name: "shape",
        message: "Pick a shape:",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like for the shape? (name or hexadecimal):",
    },
    {
        type: "input",
        name: "company",
        message: "What is the abbreviation of your company (max of 3 letters):",
        validate: function(input) {
            if (input.length > 3) {
                return "Please enter a maximum of 3 letters for the company abbreviation.";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like for the text? (name or hexadecimal):",
    },
];
// Function to run the prompt and generate SVG based on user responses
async function run() {
    try {
        const response = await inquirer.prompt(questions);
        const svgContent = createSVG(response);
        fs.writeFile("logo.svg", svgContent, (err) => {
            if (err) {
                console.error("Error generating logo.svg:", err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    } catch (error) {
        console.error("Error during the prompt:", error);
    }
}
// Initiate the run function to start the process
run();