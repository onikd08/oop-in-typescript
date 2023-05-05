// Parent class
class Person {
  //   name: string;
  //   age: number;
  //   address: string;

  constructor(public name: string, public age: number, public address: string) {
    // this.name = name;
    // this.age = age;
    // this.address = address;
  }

  sleepingHours(hour: number): string {
    return `${this.name} sleeps ${hour} hours`;
  }
}

// Child class-1
class Teacher extends Person {
  //designation: string;
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
    //this.designation = designation;
  }

  numberOfClasses(amount: number): string {
    return `${this.name} takes ${amount} classes`;
  }
}

// Child Class 2
class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("XYZ", 15, "Dhaka");
console.log(student1.sleepingHours(5));
console.log(student1.address);

const teacher1 = new Teacher("ABC", 40, "Dhaka", "Professor");
console.log(teacher1.numberOfClasses(3));
console.log(teacher1.designation);
