class Animal {
  //   name: string;
  //   species: string;
  //   sound: string;

  // Parameter Properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound(): void {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Spike", "Dog", "Bhaw Bhaw!!!");
const cat = new Animal("Tom", "Cat", "Mewao Mewao!!!");
dog.makeSound();
cat.makeSound();
