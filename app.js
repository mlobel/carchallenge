// Creates a class "Vehicle" that has the keys 'make, model, and year'

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  //   creates function in Vehicle class under key "honk" that returns the string "Beep." when called.

  honk() {
    return "Beep.";
  }

  //   function toString under Vehicle class that returns string with blanks filled in for make model and year of all objects in the vehicle class.

  toString() {
    return "The vehicle is a ${this.make} ${this.model} from ${this.year}.";
  }
}

// creates subclass "Car" which is a type of "Vehicle" all vehicles in this class will have 4 wheels.

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Creates sublass motorcycle under the superclass Vehicle

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  //   function "revEngine" that returns the string "VROOM!!!" when called

  revEngine() {
    return "VROOM!!!";
  }
}

// creates class Garage, with an empty array "vehicles" and a capacity.
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  //   creates function "add" that takes the parameter newVehicle.
  add(newVehicle) {
    // if the parameter newVehicle is not an instance of a vehicle, returns the string "Only vehicles are allowed in here!"

    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }

    // if the vehicles added to the vehicle array are greater than or equal to this.capacity returns the string "Sorry we're full!";

    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full!";
    }

    // Finally, if vehicle being added to array is a vehicle, and the capacity is not met, this will push the new vehicle into the array and return the string Vehicle added!

    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
