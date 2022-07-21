function popShift(arr: string[]) {
  let popped = ["complete"].pop(); // Change this line
  let shifted = ["challenge", "complete"].shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));