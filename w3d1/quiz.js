"use strict";

function Computer(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
}

Computer.prototype.runProgram = function(program) {
    console.log("Running program" + program);
};


function Laptop(ram, cpu, storage, battery) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
    this.battery = battery;
}
Laptop.prototype.__proto__ = Computer.prototype;
Laptop.prototype.carryAround = function() {
    console.log("carrying laptop: cpu " + this.cpu + " ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
};