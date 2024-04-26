/** Sum of Resistors in Series
 * 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

const res1 = [-1,5,6,3];
const res2 = [14,3.5,6];
const res3 = [8,15,100];

function sumResistance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res = res + e ));
    console.log(`${res} ohms`);
}
/** otra opcion
function sumResistance(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++ ) {
        res += Math.abs(arr[i]);
    }
    return res;

}
*/

sumResistance(res3);
sumResistance(res1);
sumResistance(res2);

/**
 * Number divided into halves
Given a number, return the number divided into its halves in an array.

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
 */

const n = 4;
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num /2;
    res.push(half);
    res.push(half);
    return res;

}
console.log(numDiv(n));
console.log(numDiv(n2));

/**
 * Secret Society
 * 
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 */

const membersOne = ["Esperanza", "Franco", "Nia"];
const friendsMembers = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const harryMembers = ['Harry', 'Ron', 'Hermione'];

function secretName(arr) {
    let res =[]
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join();
}

console.log(secretName(membersOne));
console.log(secretName(friendsMembers));
console.log(secretName(harryMembers));

/**
 * Online status
 * 
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */
 

const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count === 1) {
    res = `${arr[0]} is online`;
    } else if (count === 2) {
    res = `${arr[0]}, ${arr[1]} are online`;
    } else {
    res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res;
}
console.log(displayUsers(users));

/**
 * Array of Multiples
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */

const arrayMultiplos = (a , b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++;
    }
    return arr;
  };
  console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

/**
 * Positive dominance in Array
 
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */

const positivelyDominant = (arr) => {
    let a = 0;
    let b = 0;
for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] > 0 && i > 1 && arr[i - 1] !== arr[i] 
    && arr[i + 1] !== arr[i - 1]) {
      a += 1;
      console.log("a: " + a);
    }
    if (arr[i] < 0 && arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] && arr[i + 1] !== arr[i - 1]) {
      b+= 1;
      console.log("b: " + b);
    }
  }
  if (a > b) {
    return true;
  } else return false;
};
console.log(positivelyDominant([-1, -3, -5, 4, 6767]));


/**
 * Antipodal Average
 
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
mat.splice
 */

const ARR = [1,2,3,5,22,6];

function split (matr) {
  console.log(matr);
  let res = [];
  array1 = matr.splice(0, (matr.length/2));
  matr.reverse();
  for (i = 0; i < matr.legth; i++) {
    res.push((array1[i] + matr[i])/2);

  }
  return res
   
}

console.log(split(ARR))