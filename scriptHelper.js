// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.querySelector("missionTarget");
        div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"/>
    `
}


function validateInput(testInput) {
    if (testInput === '') {
     return 'Empty';
    } else if (!isNaN(testInput)) {
         return 'Is a Number';
    } else if (isNaN(testInput)) {
         return 'Not a Number'
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


            let pilotName = document.querySelector(input[name=pilotName]);
            let copilotName = document.querySelector(input[name=copilotName]);
            let fuelLevel = document.querySelector(input[name=fuelLevel]);
            let cargoLevel = document.querySelector(input[name=cargoLevel]);
            let faultyItems = document.getElementById("faultyItems");
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus");
            let cargoStatus = document.getElementById("cargoStatus");
            let launchStatus = document.getElementById("launchStatus")
            pilotStatus.innerHTML= `Pilot ${pilotName} is ready for launch`;  
            copilotStatus.innerHTML= `Copilot ${copilotName} is ready for launch`;       
            
            if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
                alert('All fields required. Please complete all fields.');

            } else if (validateInput(pilot) === 'Is a Number' || validateInput(pilot) === 'Not a Number' || validateInput(copilot) === 'Is a Number' || validateInput(copilot) === 'Not a Number') {
                alert('Numerical values are not permitted. Please submit a name.');

            } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
                alert('Please submit a number.');

            } else if (fuelLevel < 10000) {
                fuelStatus.innerHTML = `Fuel level too low for launch.`
                launchStatus.innerHTML = 'Shuttle not ready for launch.'
                launchStatus.style.color = 'red';
                faultyItems.style.faultyItems = 'visible';
            } else if (cargoLevel > 10000) {
                cargoStatus.innerHTML = `Cargo mass too high for launch.`
                launchStatus.innerHTML = 'Shuttle not ready for launch.'
                launchStatus.style.color = 'red';
                faultyItems.style.faultyItems = 'visible';
            } else {
                launchStatus.style.color = 'green'
                launchStatus.innerHTML = 'Shuttle is ready for Launch'
            }


}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        response.json().then(data)
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length) + 1;
    return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
