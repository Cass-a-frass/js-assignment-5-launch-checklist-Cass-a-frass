// Write your JavaScript code here!

// const { formSubmission, pickPlanet, addDestinationInfo, validateInput, myFetch } = require("./scriptHelper");


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
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });

   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoLevel = document.querySelector("input[name=cargoMass]");
   let list = document.getElementById("faultyItems");

   let form = document.querySelector("form")
    form.addEventListener("submit", function(event){

        event.preventDefault();
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        
        
    });
});