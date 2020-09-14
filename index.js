function findMinAndRemove(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      index = i;
    }
  }
  console.log(arr, min, index);
  arr.splice(index, 1);
  return min;
}

function selectionSort(arr){
  let sorted = [];
  while (arr.length > 0){
    console.log('arr before return', arr);
    console.log('sorted before return', sorted);
    sorted.push(findMinAndRemove(arr));
    console.log('arr after return', arr);
    console.log('sorted after return', sorted);

  }
  return sorted;
}
