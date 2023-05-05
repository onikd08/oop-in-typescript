// Parent class
class Parent {
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

// Teacher class
class Teacher extends Parent {
  //designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    //this.designation = designation;
  }

  numberOfClasses(amount: number): string {
    return `${this.name} takes ${amount} classes`;
  }
}

// Student Class
class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("XYZ", 15, "Dhaka");
console.log(student1.sleepingHours(5));

const teacher1 = new Teacher("ABC", 40, "Dhaka", "Professor");
console.log(teacher1.numberOfClasses(3));
