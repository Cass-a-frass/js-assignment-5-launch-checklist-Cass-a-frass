// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
    `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
  let copilotStatus = document.getElementById("copilotStatus");
  copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields required. Please complete all fields.");
  } else if (
    validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number" ||
    validateInput(fuelLevel.value) === "Not a Number" ||
    validateInput(cargoLevel.value) === "Not a Number"
  ) {
    alert("Please enter valid information for each field.");
  } else {
    if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
      launchStatus.style.color = "green";
      launchStatus.innerHTML = "Shuttle is ready for Launch";
      list.style.visibility = "hidden";
    } else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        if (fuelLevel.value < 10000) {
          fuelStatus.innerHTML = `Fuel level too low for launch`;
        } else {
              fuelStatus.innerHTML = `Fuel level high enough for launch`;
        } 
        if (cargoLevel.value > 10000) {
          cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        } else {
          cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
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
