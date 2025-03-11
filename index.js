// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4)
}
console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare)
    {return x*fare}

    }

    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    function selectDifferentDrivers(drivers, driverSelectorFunction){
        return driverSelectorFunction(drivers);
    }
