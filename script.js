// Write your JavaScript code here!

const { formSubmission, pickPlanet, addDestinationInfo, validateInput, myFetch } = require("./scriptHelper");


window.addEventListener("load", function() {


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
   });


   let form = document.querySelector("form")
    form.addEventListener("submit", function(event){
        
        console.log("entered event listener for submit")
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuel = document.querySelector("input[name=fuelLevel]");
        let cargo = document.querySelector("input[name=cargoLevel]");
        
        
        
        if (validateInput(pilot.value) === 'Empty' || validateInput(copilot.value) === 'Empty' || validateInput(fuel.value) === 'Empty' || validateInput(cargo.value) === 'Empty') {
            alert('All fields required. Please complete all fields.');

        } else if (validateInput(pilot.value) === 'Is a Number'|| validateInput(copilot.value) === 'Is a Number') {
            alert('Numerical values are not valid. Please submit a name.');

        } else if (validateInput(fuel.value) === 'Not a Number' || validateInput(cargo.value) === 'Not a Number') {
            alert('Please submit a number.');
            
        } else {
        formSubmission(document, pilot.value, copilot.value, fuel.value, cargo.value)
        }

    event.preventDefault();

    });
});