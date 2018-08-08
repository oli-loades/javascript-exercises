"use strict";

var cars = [];

function createCarWithFaults(id, make, model, faults) {
    var car = {};
    car.regno = id;
    car.make = make;
    car.model = model;
    car.faults = faults;
    cars.push(car);
}

function createCar(id, make, model) {
    var car = {};
    car.regno = id;
    car.make = make;
    car.model = model;
    car.faults = [];
    cars.push(car);
}

function addFualt(id, type, price) {
    var fault = {};
    var c = cars.find(car => {
        return car.regno === id;
    });
    fault.type = type;
    fault.price = price;
    c.faults.push(fault);
}
