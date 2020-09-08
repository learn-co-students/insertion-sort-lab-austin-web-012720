//find minumum in an array and remove it
function findMinAndRemove(array) {
  let index = 0;
  let curr = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < curr) {
      curr = array[i];
      index = i;
    }
  }
  array.splice(index, 1);
  return curr;
}

//implement a selection sort method and call minAndRemove
function selectionSort(array) {
  let min;
  let sorted = [];

  while (array.length != 0) {
    min = findMinAndRemove(array);
    sorted.push(min);
  }
  return sorted;
}
