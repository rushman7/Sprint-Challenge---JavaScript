// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubeMaker {
  constructor(char) {
    this.length = char.length;
    this.width = char.width;
    this.height = char.height;
  }

  volume() {
    return this.length * this.width * this.height
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

class CubeMaker2 extends CubeMaker {
  constructor(char) {
    super(char)
  }

  cubeVolume() {
    return this.length * this.width * this.height;
  }

  cubeSA() {
    return 6 * (this.length * this.width)
  }
}

const cuboid2 = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
})

const cube = new CubeMaker2({
  length: 5,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSA())

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.