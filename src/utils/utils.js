const uniqueArrays = arr => {
  let uniques = [];
  let itemsFound = {};
  for (let i = 0; i < arr.length; i++) {
    let stringifiedArr = JSON.stringify(arr[i]);
    if (itemsFound[stringifiedArr] > 0) {
      itemsFound[stringifiedArr]++;
    } else {
      uniques.push(arr[i]);
      itemsFound[stringifiedArr] = 1;
    }
  }
  return itemsFound;
};

module.exports = { uniqueArrays };
