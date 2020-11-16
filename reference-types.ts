// ptimitive types
let a: number = 1;
let b: string = "word";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Class
class Person {}
const me: Person = new Person();

// Object literal
let point: { x: number; y: number; sum?(): string } = {
  x: 1,
  y: 2,
};

// function
const logNumber: (num: number) => void = (num) => console.log(num);

// tuple
const man: [string, number] = ["james", 23];

// interface
interface Pointy {
  x: number;
}
const pointer = (poi: Pointy) => poi;

const blue = { x: 2, y: 5 };
pointer(blue);

/// more on classes
// private - accessible by parent class only, not by child class or instance
// protected - accessible by parent and child class, not by instance
// public - accessible by all
class Vehicle {
  constructor(public color: string) {}

  voom(): void {
    console.log(this.color);
  }

  tires = 2;
}

class Car extends Vehicle {
  constructor( color: string, public doors: number){
    super(color);
  }

  props () {
    
    console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
    console.log(this.color)
    console.log(this.doors)
    console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
    
  }
}

const car = new Car("yes", 23);
car.props();
