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

function selectionSort(array) {}
