class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
  }
  
  turnOn() {
    console.log(`${this.name} is turned on`);
    this.isTurnedOn = true;
  }
  
  turnOff() {
    console.log(`${this.name} is turned off`);
    this.isTurnedOn = false;
  }
}


class Iron extends ElectricalAppliance {
  constructor(name, brand, power, covers){
    super(name, power);
    this.brand = brand;
    this.covers = covers;
    this.isTurnedOn = false;
    this.steamIsOn = false;
  }
  
  steamBoost() {
    console.log("Steam is on");
    this.steamIsOn = true;
  }
}


class Computer extends ElectricalAppliance {
  constructor(name, power, processor, ram) {
    super(name, power);
    this.processor = processor;
    this.ram = ram;
    this.isTurnedOn = false;
  }
}

const greenIron = new Iron("Green Iron", "philips", 10, "ceramics");

const homeComputer = new Computer("Home computer", 300, "intel", 8)


greenIron.turnOn();

homeComputer.turnOff();


console.log(greenIron);

console.log(homeComputer);

