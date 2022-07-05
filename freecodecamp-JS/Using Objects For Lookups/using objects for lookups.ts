// Setup
function phoneticLookup(val:string|number) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
    }
  
    // storing lookup
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  export { phoneticLookup }
  
  phoneticLookup("charlie");
  
  // when to use 
  // in place of numerous if else statements
  // in place of numerous switch statements
  // in case of limited input values