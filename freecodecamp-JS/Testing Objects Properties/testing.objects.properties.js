function checkObj(obj, checkProp) {
  // Only change code below this line
  // obj has properties of {gift: "pony", pet: "kitten", bed: "sleigh"}
  // now obj is assigned to checkProp
  // which will check checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") returns Kitten
  // checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else{
    return "Not Found";
  }
  // Only change code above this line
}