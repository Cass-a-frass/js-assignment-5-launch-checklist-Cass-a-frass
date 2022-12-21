// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
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


            let pilotStatus = document.getElementById("pilotStatus");
            pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;  
            let copilotStatus = document.getElementById("copilotStatus");
            copilotStatus.innerHTML= `Copilot ${copilot} is ready for launch`;       
            let fuelStatus = document.getElementById("fuelStatus");
            let cargoStatus = document.getElementById("cargoStatus");
            let launchStatus = document.getElementById("launchStatus")
            

            if (fuelLevel < 10000) {
                fuelStatus.innerHTML = `Fuel level too low for the journey.`;
                launchStatus.innerHTML = 'Shuttle not ready for launch.';
                launchStatus.style.color = 'red';
            } else if (cargoLevel > 10000) {         
                cargoStatus.innerHTML = `Cargo mass too high for launch.`;
                launchStatus.innerHTML = 'Shuttle not ready for launch.';
                launchStatus.style.color = 'red';
            } else {
                launchStatus.style.color = 'green';
                launchStatus.innerHTML = 'Shuttle is ready for Launch';
            }
            document.getElementById("faultyItems").style.visibility = "visible";


}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        response.json()
});
    return planetsReturned;
}

function pickPlanet(planets) {
    let keysArray = Object.keys(planets)
    let randomNum = Math.floor(Math.random() * keysArray.length) + 1;
    return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
