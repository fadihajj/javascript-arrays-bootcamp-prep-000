var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el){
  return [el, ...arr];''
}

function destructiveAddElementToBeginningOfArray(arr, el){
  return (arr[0] = el);
}