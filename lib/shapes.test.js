// Import the Shape classes from the shapes.js file
const {Square, Circle, Triangle} = require("./shapes");
// Test suite for Shape Colors
describe('Shape Colors', () => {
    // Test case to generate and validate a Square
      describe("Generate Square", function() {
        it("pass if square is blue", function() {
            const shape = new Square("blue");
            expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue"/>');
        })
      })
    // Test case to generate and validate a Circle
      describe("Generate Circle", function() {
        it("pass if circle is red", function() {
            const shape = new Circle("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
        })
      })
    // Test case to generate and validate a Triangle
      describe("Generate Triangle", function() {
        it("pass if triangle is yellow", function() {
            const shape = new Triangle("yellow");
            expect(shape.render()).toEqual('<polygon points="25 160, 150 10, 275 160" fill="yellow" stroke-width="5"/>');
        })
      })
});