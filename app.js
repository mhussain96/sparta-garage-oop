

function Car(make, model, color, year) { // arguments in constructor function
  this.make = make;  // keys and values
  this.model = model;
  this.color = color;
  this.year = year;  
}

// const car1 = new Car("Ferrari", "Italia", "Red", 1996); 

class Garage {  // blueprint for creating garages

  constructor(location, name, founded, employees) {
    this.location = location;
    this.name = name;
    this.founded = founded;
    this.employees = employees;
  }

  carBuilder(make, model, color, year) { // method of garage class
    this.car = new Car(make, model, color, year);   
    const car1 = new Car("BMW", "1 Series", "Blue", 2003);
    console.log(car1);
    
  }

  garageDescription() {

  }

}

// garage1 is an instance of class garage 
const garage1 = new Garage("Kent", "Bob's Garage", 1967, 10);
garage1.garageDescription(); 
console.log(garage1);
garage1.carBuilder("BMW", "1 Series", "Blue", 2003);
