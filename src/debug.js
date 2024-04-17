const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  // return [...users].sort(sortingFunction(user)); // not right
  const user = [...users];
  return user.sort(sortingFunction);
  // return user;
};

const logEachName = (names) => {
  return names.forEach((val, index, array) => console.log(val, index, array));
};

const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
logEachName(names);

const logEachUserBio = (users) => {
  return users.forEach((user) => console.log(user.bio));

  // you are returning from the bigger function that console log the output, so you may still need return
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
