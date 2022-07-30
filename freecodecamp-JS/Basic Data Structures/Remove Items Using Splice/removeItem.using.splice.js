
// splice allows us to do just remove any number of consecutive elements from anywhere in n array
// splice() method accepts 3 parameter but for basic we only use 2 parameter where 1st parameter represents the index on the array from which to begin removing elements while second indicated the number of elements to delete.

let array = ['today', 'is', 'your', 'happy', 'birthday'];
array.splice(2,2);

// array would be ['today', 'is', 'birthday']

// splice not only modifies the array it's being called on, but it also returns a new array containing the value removed elements

let arras = ['I', 'am', 'from', 'itahari', 'tarahara', 'sunsari'];
let newarras = arras.splice(3, 2);
// newarras has the value of ['itahari','tarahara']

// remove elements of array so that the sum becomes only 10
const arrf = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arrf.splice(1, 4);
// Only change code above this line
console.log(arrf);