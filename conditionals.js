//if statements
const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pcik out a scarf!");
}

console.log("Now you're ready to go outside!")



const temperature = 41;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


//Logical operators

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

const whichSchool  = function (age) {
  
  if (age < 13) {
    console.log("Elementry school");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary school");
  } else  {
    console.log("Lighthouse Labs");
  }
}
console.log(whichSchool(19));


var x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0){
        console.log("James");
    } else if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    } else {
        console.log(x);
    }
    
    x = x + 1;
}


