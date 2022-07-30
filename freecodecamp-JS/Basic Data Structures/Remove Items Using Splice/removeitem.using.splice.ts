
let arraye: string[] = ['today', 'is', 'your', 'happy', 'birthday'];
arraye.splice(2,2);

// array would be ['today', 'is', 'birthday']

// splice not only modifies the array it's being called on, but it also returns a new array containing the value removed elements

let arrase: string[] = ['I', 'am', 'from', 'itahari', 'tarahara', 'sunsari'];
let newarrass = arrase.splice(3, 2);
// newarras has the value of ['itahari','tarahara']

// remove elements of array so that the sum becomes only 10
const arrfs: number[] = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arrfs.splice(1, 4);
// Only change code above this line
console.log(arrfs);


