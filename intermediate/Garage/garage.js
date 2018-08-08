"use strict";
var garage = [];

function addCar(car) {
    garage.push(car);
}

function removeCar(id) {
    var filtered = garage.filter(car => {
        return car.regno !== id;
    });
    garage = filtered;
}

function viewAll() {
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

function calcBill(id) {
    var total = 0;
    var car = searchGarage(id);
    for (var i = 0; i < car.faults.length; i++) {
        total += car.faults[i]['price'];
    }
    return total;
}

function searchGarage(id) {
    return garage.find(car => {
        return car.regno === id;
    });
}

