const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const result = myForEach(myNames, (name) => console.log(`Hi, ${name}!`)); 

// console.log(result); // undefined
// console.log(myNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']

const myMap = (array, callback) => {
  let DoubleNum = []
  for (let i = 0; i <array.length; i++){
    DoubleNum.push(callback(array[i]))
  }
  return DoubleNum
};

// const myNums = [1, 4, 9, 16];

// // Pass a function to map
// const myDoubledNums = myMap(myNums, (x) => x * 2);

// console.log(myDoubledNums);
// // expected output: [2, 8, 18, 32]
// console.log(myNums);
// // expected output: [1, 4, 9, 16] unaffected!

const myFind = (array, callback) => {
  for (let name of array){
    if (callback(name)){
      return name
    }
  }
  return undefined
};

// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const nameHasB = myFind(myNames, (name) => name.includes('B'));
// console.log(nameHasB); // 'Bob' not 'Barry' because 'Bob' is first

// const nameHasZ = myFind(myNames, (name) => name.includes('Z'));
// console.log(nameHasZ); // undefined


const myFilter = (array, callback) => {
  let nameInclude = []
  for (let name of array){
    if (callback(name)){
      nameInclude.push(name)
    }
  }
  return nameInclude
};


// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const namesWithB = myFilter(myNames, (name) => name.includes('B'));
// console.log(namesWithB); // ['Bob', 'Barry']

// const namesWithZ = myFilter(myNames, (name) => name.includes('Z'));
// console.log(namesWithZ); // []


const sortWords = (array) => {
  const sortedWords = array.slice();
  // let newArr = array.sort()
  return sortedWords.sort()
};

// const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
// const sortedNames = sortWords(unsortedNames);

// console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
// console.log(unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']

const sortNumbers = (array) => {
  const sortedNum = array.slice()
  return sortedNum.sort((a, b) => a - b);
};

// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const sortedNums = sortNumbers(unsortedNums);

// console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
// console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]

const sortNumbersBetter = (array, isDescending = false) => {
  const sortedNum = array.slice() 
  if (isDescending){
    return sortedNum.sort((a, b) => b - a);
  }else{
    return sortedNum.sort((a, b) => a - b);
  }
};

// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const bigToSmall = sortNumbersBetter(unsortedNums, true);
// console.log(bigToSmall); // [100, 14, 11, 3, 2, 1]

// const smallToBig = sortNumbersBetter(unsortedNums); // default param
// console.log(smallToBig); // [1, 2, 3, 11, 14, 100]

const sortUsersByOrder = (array) => {
  const sortedUsers = array.slice(); // Using slice() to create a shallow copy

    // Sort the new array by the order property in ascending order
  sortedUsers.sort((a, b) => a.order - b.order);

  return sortedUsers;

};


// const users = [
//   { name: 'Alice', order: 1 },
//   { name: 'Bob', order: 3 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Debbie', order: 4 },
// ];

// const sortedUsers = sortUsersByOrder(users);
// console.log(sortedUsers);
// // [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]


// Callback function to sort users by name
const compareByName = (a, b) =>{
  if (a.name < b.name) {
    return -1; // a should come before b
  } else if (a.name > b.name) {
    return 1; // a should come after b
  } else {
    return 0; // names are equal
  }
}

const sortUsersByName = (array, callback=compareByName) => {
  const sortedUsers = array.slice();
  sortedUsers.sort(callback);
  return sortedUsers;
};

// const users = [
//   { name: 'Alice', order: 22 },
//   { name: 'Charlie', order: 28 },
//   { name: 'Diana', order: 40 },
//   { name: 'Bob', order: 32 },
// ];

// console.log('sortUsersByName----------------')
// const sortedUsers = sortUsersByName(users, compareByName);
// console.log(sortedUsers);

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
