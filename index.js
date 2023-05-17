const inquirer = require("inquirer");
const fs = require("fs")
const createSVG = require("./lib/createSVG");

// Questions

const questionLog = [
    {
        type: "list",
        name: "shape",
        message: "Pick a shape:",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like for the shape? (name or hexagon):",
    },
    {
        type: "input",
        name: "company",
        message: "What is the abbreviation of your company (max of 3 letters):",
        validate: function(input){
            if (input.length > 3){
                return "max of 3 letters allowed";
            }
            return true
            }
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like for the text? (name or hexagon):",
    },
];

// Create SVG

// inquirer.createPromptModule(questionLog).then((response) => {

//     fs.writeFile("logo.svg", createSVG(response), (err) =>
//         err ? console.log(err) : console.log("generated logo.svg")
//     );
// });

(async () => {
    try {
      const { prompt } = await import("inquirer");
      const response = await prompt(questionLog);
      fs.writeFile("logo.svg", createSVG(response), (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    } catch (error) {
      console.error(error);
    }
  })();