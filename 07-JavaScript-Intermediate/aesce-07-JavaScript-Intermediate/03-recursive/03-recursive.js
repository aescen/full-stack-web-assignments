/* eslint-disable no-lonely-if */
// Soal 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray($arr) {
  if ($arr.length === 0) return 0;
  return $arr[0] + sumOfArray($arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg($arr, $avg) {
  let cavg = 0;
  for (let i = 0; i < $arr.length; i += 1) {
    if ($arr[i] > $avg) cavg += 1;
  }

  return cavg;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal 3
const arr = [1, 2, 3, 4, 5];
function searchInArray($arr, $num, $i = 0) {
  if ($arr[$i] === $num) {
    console.log('angka ditemukan pada index di:', $i);
    return;
  }

  if ($i === $arr.length) {
    console.log('angka tidak ditemukan');
    return;
  }

  searchInArray($arr, $num, $i + 1);
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

// Soal 4
/* *******************************************

i\j| 4 3 2 1 0
--------------
0  | 4 3 2 1 A
1  | 4 3 2 B C
2  | 4 3 C D E
3  | 4 D E F G
4  | E F G H I

i\j|  4  3  2  1  0
-------------------
0  |             65
1  |          66 67
2  |       67 68 69
3  |    68 69 70 71
4  | 69 70 71 72 73

i\j| 4 3 2 1 0
--------------
0  |         0
1  |       1 2
2  |     2 3 4
3  |   3 4 5 6
4  | 4 5 6 7 8
*/

/* *******************************************
j > i - 1 = ' '
startChar = 65 -> A
hyp = i + 65
adj = i + 65 + 1

const row = 10;
const col = 10;
const startChar = 65;
let pattern = '';
let nextIsAdjacent = false;
let nextAdjacent = 0;
for (let i = 0; i < row; i += 1) {
  for (let j = col; j > 0; j -= 1) {
    if (j - 1 > i) {
      pattern += ' ';
    } else {
      if (!nextIsAdjacent) {
        nextAdjacent = 1;
        pattern += String.fromCharCode(i + startChar);
        nextIsAdjacent = true;
      } else {
        pattern += String.fromCharCode(i + startChar + nextAdjacent);
        nextAdjacent += 1;
      }
    }
  }
  pattern += '\n';
  nextIsAdjacent = false;
}
console.log(pattern);
*/

function trianglePattern(row, col) {
  let pattern = '';
  let nextIsAdjacent = false;
  let nextAdjacent = 0;
  const startChar = 65;
  function getPattern(r, c, nextI = 0) {
    function getAdjacent(i, j) {
      if (j > 0) {
        if (j - 1 > i) {
          pattern += ' ';
        } else {
          if (!nextIsAdjacent) {
            nextAdjacent = 1;
            pattern += String.fromCharCode(i + startChar);
            nextIsAdjacent = true;
          } else {
            pattern += String.fromCharCode(i + startChar + nextAdjacent);
            nextAdjacent += 1;
          }
        }

        getAdjacent(i, j - 1);
      }
    }

    if (nextI < r) {
      getAdjacent(nextI, c);
      pattern += '\n';
      nextIsAdjacent = false;
      getPattern(r, c, nextI + 1);
    }
  }

  getPattern(row, col);
  console.log(pattern);
}
const first = 5;
const second = 3;
const third = 4;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);
