class Shape {
  getArea(): number {
    return 1;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);

console.log(shape.getArea());
console.log(circle.getArea());
console.log(rectangle.getArea());
