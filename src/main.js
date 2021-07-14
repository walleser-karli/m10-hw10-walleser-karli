// The number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function
const boilingTemp = boil => document.getElementById("boiling-temp").innerHTML = 212;

boilingTemp(212);

// The number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function

const freezingTemp = freeze => document.getElementById("freezing-temp").innerHTML = "32";

freezingTemp("32");

// Any number of your choice immediately prints inside of the span with the ID "water-temp" using an arrow function
const waterTemp = water => document.getElementById("water-temp").innerHTML = "66";

waterTemp("66");

