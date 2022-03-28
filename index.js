// Code your solution in this file!
//
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier){
    return function(givenValue) {
        return fareMultiplier * givenValue;
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers);
}
