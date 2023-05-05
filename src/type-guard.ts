/*
Type Guard or type narrowing
 => using typeof
 => using in operator (only applicable for accessing object or interface property)
 => using instanceof (for classes and there objects/instances)  
*/

// typeof guard

type checkType = string | number | boolean;

function getType(param: checkType): string {
  if (typeof param === "string") {
    return param + " is string";
  }
  if (typeof param === "number") {
    return param + " is number";
  }
  if (typeof param === "boolean") {
    return param + " is boolean";
  }
  return "type could not be found";
}

console.log(getType("false")); // output: string

// in Operator guard

interface INormalUserAccount {
  name: string;
  age: number;
}

interface IAdminUserAccount {
  name: string;
  age: number;
  role: "admin";
}

const isAdmin = (
  userAccount: INormalUserAccount | IAdminUserAccount
): boolean => {
  if ("role" in userAccount) {
    return !!userAccount.role;
  } else {
    return false;
  }
};
const adminUser1: IAdminUserAccount = { name: "Admin", age: 40, role: "admin" };
const normalUser1: INormalUserAccount = { name: "User 1", age: 30 };

console.log(isAdmin(normalUser1));

// instance of guard

class Pet {
  constructor(public name: string, public species: string) {}

  makeSound(): string {
    return `Pet is making sound`;
  }
}

class Dog extends Pet {
  constructor(name: string, species: string, public age: number) {
    super(name, species);
  }
  bark(): string {
    return `${this.name} (${this.species}) is barking`;
  }
}

class Cat extends Pet {
  constructor(name: string, species: string, public age: number) {
    super(name, species);
  }
  meawo(): string {
    return `${this.name}(${this.species}) is meawoing`;
  }
}

const getAnimalType = (petInstance: Pet): string => {
  if (isDog(petInstance)) {
    return petInstance.bark();
  } else if (isCat(petInstance)) {
    return petInstance.meawo();
  } else {
    return petInstance.makeSound();
  }
};

const isDog = (pet: Pet): pet is Dog => {
  return pet instanceof Dog;
};

const isCat = (pet: Pet): pet is Cat => {
  return pet instanceof Cat;
};

const animal1: Pet = new Dog("Spike", "Dog", 5);
const animal2: Pet = new Cat("Tom", "Cat", 3);

console.log(getAnimalType(animal1));
console.log(getAnimalType(animal2));
