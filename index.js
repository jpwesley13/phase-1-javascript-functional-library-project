// const collection = { a: 1, b: 2, c: 3 };

// const valuesArray = Array.isArray(collection) ? collection : Object.values(collection);
// console.log(valuesArray);

//For Each
function myEach(collection, callback){
    const valueArray = Array.isArray(collection) ? collection : Object.values(collection);
    
    for (let i = 0; i < valueArray.length; i++) {
        callback(valueArray[i])
    }
    return collection
};

//Map
function myMap(collection, callback) {
    const aNewArray = []; //initialize a new array for the final content to be pushed into

    const valueArray = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < valueArray.length; i++) {
        const iterated = callback(valueArray[i]);
        aNewArray.push(iterated) //Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
    };

    return aNewArray;
};
//Example
myMap([1, 2, 3], function(num){ return num * 3; }); //function = callback, (num) = (valueArray[i], or the value of the array at an index) => [3, 6, 9]

//Reduce
function myReduce(collection, callback, acc){
    const valueArray = Array.isArray(collection) ? collection : Object.values(collection);

    let accumulator = acc !== undefined ? acc : valueArray[0];

    for (let element of valueArray.slice(acc !== undefined ? 0 : 1)) {
        accumulator = callback(accumulator, element); //initialize the accumulator variable with the initialValue if provided, or the first element of the iterable otherwise. Inside the loop, we iterate over the iterable using the for...of loop, starting from the second element if the initialValue is not provided. We update the accumulator by invoking the callback function with the current accumulator value and the current element. Finally, we return the final accumulator value.
    };

    return accumulator;
}; 
//Example
const numbers = [1, 2, 3, 4];
const sum = myReduce(numbers, (accumulator, number) => {
  return accumulator + number;
}, 0); //For every number, the accumulator, which starts at 0, is added to the number. So for 1, (0, 1), 0 + 1 is 1. Then for 2, (1, 2), 1 + 2 is 3, and so on.

//Find
function myFind(collection, predicate){
    const valueArray = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < valueArray.length; i++) { //looks through the collection, iterating through each piece of the array
        if (predicate(valueArray[i])) { //check each value against the predicate function using predicate(iterable[i])
            return valueArray[i];
        }
    }

    return undefined; //if there are no values that pass the truth test then nothing is returned in the for loop, so undefined is returned here instead
};
//Example
const numbersB = [1, 2, 3, 4];
const foundNumber = myFind(numbersB, (number) => {
  return number % 2 === 0;
});
console.log(foundNumber); // for every number in numbersB, return numbers whose remainder divided by 2 is 0. Both 2 and 4 accomplish this, but myFind returns after finding 2, so only 2 is given.

//Filter
function myFilter(collection, predicate){
    const valueArray = Array.isArray(collection) ? collection : Object.values(collection);
    const newArray = [];

    for (let i = 0; i < valueArray.length; i++){
        if (predicate(valueArray[i])){
            newArray.push(valueArray[i]); //if it passes the predicate test, newArray gets pushed that value in the collection, adding it to the new array. If none pass the test, newArray is stil returned, but it's empty.
        }
    }

    return newArray
};

//Size
function mySize(collection){
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
};

//~~~~~                 ARRAYS                  ~~~~~
//First
function myFirst(array, n){
    if (n !== undefined) { //so long as n is not undefined but is present
        return array.slice(0, n); //return a new array from the 0th index until the nth index
      } else {
        return array[0]; //otherwise just return the 0th index
      };
    };

  console.log(myFirst([5, 4, 3, 2, 1], 3))

//LAST
  function myLast(array, n){
    if (n !== undefined) {
        return array.slice(-n); //-n in slice tells it to count n elements starting from the end of the array.
    } else {
        return array[array.length -1];
    };
  };

  //~~~~~                 ARRAYS                  ~~~~~
//KEYS
function myKeys(object){
    const storedProperties = []; //whenever I want to end up with a populated array, declare an empty array to use
    for (let key in object){
        storedProperties.push(key);
    };
    return storedProperties
};

//VALUES
function myValues(object){
    const storedValues = []
    for (let key in object){
        storedValues.push(object[key]) //accesses the value of each property. key represents the property name, and using it as the index of the object will give me the respective value.
    };
    return storedValues;
};