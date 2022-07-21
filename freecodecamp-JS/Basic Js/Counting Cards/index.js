let count = 0;

function cc(card) {
  // Only change code below this line

  // since we have many options or conditions to evaluate we use switch statement
  // switch takes card as parameter which will be returned later
  switch(card){
    // count will be plus for these cases
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    
    // count will be minus 1 for these cases
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }

  var holdBet = "Hold";
  if(count > 0){
    holdBet = "Bet";
  }

  return count + " " + holdBet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc());

// // cards sequence 2 , K , 10, K, A
// cc(2); cc('K'); cc(10); cc('K'); cc('A');
// console.log(cc(4));

// // cards sequence 10, J, Q, K, A
cc(10); cc('J'); cc('Q'); cc('K'); cc('A');
console.log(cc("J"));

// // cards sequence 2, 3, 4, 5, 6
cc(10); cc('J'); cc('Q'); cc('K'); cc('A');
console.log(cc(10));


