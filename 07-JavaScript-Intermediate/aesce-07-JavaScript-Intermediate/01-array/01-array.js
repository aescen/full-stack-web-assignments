// Soal 1
function reverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

{
  const arr = [1, 2, 3];
  const arr2 = [8, 1, 5, 7];

  const newArr = reverse(arr);
  const newArr2 = reverse(arr2);

  console.log(arr, newArr);
  console.log(arr2, newArr2);
}

// Soal 2
function getAverage(arr) {
  let average = 0;
  for (let i = 0; i < arr.length; i += 1) {
    average += arr[i];
  }
  average /= arr.length;
  const aboveAverage = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > average) {
      aboveAverage.push(arr[i]);
    }
  }

  return aboveAverage.length;
}

{
  const arr1 = [1, 3, 4, 1, 2, 8];
  const arr2 = [5, 6, 7, 8, 1, 3];

  console.log(getAverage(arr1));
  console.log(getAverage(arr2));
}

// Soal 3

function searchInArray(arr, x) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      flatArr.push(arr[i][j]);
    }
  }

  const found = [];

  for (let i = 0; i < flatArr.length; i += 1) {
    if (flatArr[i] === x) {
      found.push(flatArr[i]);
    }
  }

  if (found.length > 0) {
    return found[0];
  }

  return null;
}

{
  const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];

  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
}
