"use strict";

// The number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function
var boilingTemp = function boilingTemp(boil) {
  return document.getElementById("boiling-temp").innerHTML = 212;
};

boilingTemp(212);

// The number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function

var freezingTemp = function freezingTemp(freeze) {
  return document.getElementById("freezing-temp").innerHTML = 32;
};

freezingTemp(32);

// Any number of your choice immediately prints inside of the span with the ID "water-temp" using an arrow function
var waterTemp = function waterTemp(water) {
  return document.getElementById("water-temp").innerHTML = 66;
};

waterTemp(66);

// If the number stored in “water-temp” is above 212, remove the class “hide” and add the class “show” to the section with the ID “boiling” so that the message “The water is hot. I think it is boiling.” appears
//  If the number stored in “water-temp” is below 32, remove the class “hide” and add the class “show” to the section with the ID “frozen” so that the message “The water is cold. I think it is frozen.” appears
// If the number stored in “water-temp” is neither above 212 nor below 32, remove the class “hide” and add the class “show” to the section with the ID “good-temp” so that the message “The water is fine. Jump on in.” appears

var boil = document.getElementById("boiling");
var freeze = document.getElementById("frozen");
var good = document.getElementById("good-temp");

setTimeout(function coldEnough() {
  var waterTemp = 66;
  if (waterTemp >= 212) {
    boil.classList.remove("hide");
    boil.classList.add("show");
  }

  if (waterTemp <= 32) {
    freeze.classList.remove("hide");
    freeze.classList.add("show");
  }

  if (waterTemp < 212 && waterTemp > 32) {
    good.classList.remove("hide");
    good.classList.add("show");
  }
}, 3000);