// Base class Shapes representing a generic shape
class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render(){
        return new Error("No shape selected!")
    }
}
// Square class that extends the Shapes class
class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}
// Circle class that extends the Shapes class
class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}
// Triangle class that extends the Shapes class
class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }
    render() {
        return `<polygon points="25 160, 150 10, 275 160" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}
// Export the subclasses
module.exports = {Square, Circle, Triangle};