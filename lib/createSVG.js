const { Circle, Triangle, Square } = require("./shapes");

function createSVG (response) {

    if (response.shape === "Circle") {
        response.shape = new Circle(response.shapeColor);
    }
    else if (response.shape === "Triangle") {
        response.shape = new Triangle(response.shapeColor);
    }
    else if (response.shape === "Square") {
        response.shape = new Square(response.shapeColor);
    }
    
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${response.shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.company}</text>
    </svg>
    `
  };
  
  module.exports = createSVG;