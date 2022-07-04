// Setup
const myDog: {
  name?: string,
  legs?: number,
  tails?: number,
  friends?: [string],
  bark: string
} = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

// js object properties can be deleted with delete keyword using dot or bracket notation

delete myDog.tails;
// must have optional operand to delete it
delete myDog["friends"];
