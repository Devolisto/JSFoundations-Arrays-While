/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  if(numbers.length % 2) {
    return true;
  } else return false;
}

// console.log(isArrayLengthOdd([1, 2, 3, ]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  if(numbers.length % 2) {
    return false;
  } else return true;
}

// console.log(isArrayLengthEven([1, 2, 3, 4]));
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  return instructors;
  
}

// console.log(addLailaToArray(["Ali", "Khalid"]));

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}

// console.log(eliminateTeam(["Brazil", "Germany", "Italy"]))

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here

  // if(fruits.length % 2) {
  //   fruits.length/2;
  //   return fruits;
  // } else {
  //   let count = 0;
  //   while (count < fruits.length) {
  //     fruits.pop;
  //   }
  // }

  let newArr = fruits.length;
  return newArr % 2 ? [] : fruits.slice(newArr / 2);
}

// console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(shout) {
  // Your code here
  // if(shout.endsWith("!")) {
  //   shout.endsWith("!");
  //   return shout.slice(0,-1)
  // }

  while(shout.endsWith("!!")) {
    shout = shout.slice(0 , -1);
  }
  return shout;
}

// console.log(youGottaCalmDown("HI!!!!!!!"));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
