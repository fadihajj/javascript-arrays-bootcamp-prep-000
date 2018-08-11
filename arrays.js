var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el){
  return arr.unshift(el);
}

function destructiveAddElementToBeginningOfArray(arr, el){
  return (arr[0] = el);
}