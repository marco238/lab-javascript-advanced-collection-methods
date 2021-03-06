var responses = ["This is the best job ever!",
                 "Satisfied.",
                 "At least I get paid.",
                 "I'm looking for another job.",
                 "I don't want to answer."
];

function randomResponse(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function arrayResponses(array) {
  var tenResponses = [];
  for (var i = 0; i < 10; i++) {
    tenResponses.push(randomResponse(array));
  }
  return tenResponses;
}

function arrayDepartmentResponses(array) {
  var fiftyResponses = [];
  for (var j = 0; j < 5; j++) {
    fiftyResponses.push(arrayResponses(array));
  }
  return fiftyResponses;
}

function beautifyAnswer(array) {
  var finalArray = [];
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 10; j++) {
      finalArray.push("Dep " + (i + 1) + ": " + array[i][j]);
    }
  }
  return finalArray;
}

var employeeSatisfaction = function() {
  // Steps 2, 3 and 4 here
  var array = arrayDepartmentResponses(responses);
  return array;
};

var answersArray = employeeSatisfaction();

console.log(beautifyAnswer(answersArray));

/**********************Iteration 2*************************/

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function birthDayArray(array) {
  var newArray = [];
  for (i = 0; i < array.length; i = i + 2) {
    newArray.push([array[i], array[i + 1]]);
  }

  return newArray;
}

var birthArray = [];
var moreBthArray = [];
var definitiveArray = [];

bthArray = birthDayArray(birthdays);
console.log("Birthdays list:\n");
console.log(bthArray);

moreBthArray = birthDayArray(moreBirthdays);
console.log("\nSecond list:\n");
console.log(moreBthArray);

definitiveArray = bthArray.concat(moreBthArray);
console.log("\nDefinitive list:\n");
console.log(definitiveArray);

/**********************Iteration 3*************************/
//No repeated char
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function(password) {
  var container = "Good password.";
  password.split("").sort(function(a, b) {
    container = a - b === 0 ? "Ouch, bad password." : container;
  });
  console.log(container);
}

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//Only digits
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function(password) {
  var acc = 0;
  password.split("").forEach(function(element) {
    isNaN(element) ? acc++ : acc;
  });
  acc > 0 ? console.log("Ouch, bad password.") : console.log("Good password.");
};

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//Ten digits only
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function(password) {
  password.length > 10 ? password = password.split("").splice(0, 10).join("") : password;
  console.log(password);
};

trimPassword(badPsswd);

/**********************Iteration 4*************************/

//Recorded in November
var novemberArtists = function(array) {
  array = array.filter(function(element) {
    return element.month === 11;
  }).map(function(element) {
    return element.artist;
  });
  return array;
};

console.log(novemberArtists(abbeyRoadRecords));

//Best artist
var bestArtist = function(array) {
  var current = 0;
  var art = "";
  for (i = 0; i < array.length; i++) {
    bigger = array.filter(function(element) {
      return element.artist === array[i].artist;
    });
    if (bigger.length > current) {
      current = bigger.length;
      art = array[i].artist;
    }
  }
  console.log(art + " recorded " + current + " songs");
};

bestArtist(abbeyRoadRecords);

//Last Beatles´s song
var lastBeatlesSong = function(array) {
  array = array.filter(function(element) {
    return element.artist === "The Beatles";
  });
  return array[array.length - 1];
};

console.log(lastBeatlesSong(abbeyRoadRecords));

//Last song recorded in the ´60s
var sixtiesSong = function(array) {
  array = array.filter(function(element) {
    return element.year >= 1960 && element.year < 1970;
  });
  var data = array[array.length - 1];
  return data;
  };

console.log(sixtiesSong(abbeyRoadRecords));
