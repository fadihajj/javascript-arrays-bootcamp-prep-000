var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el){
  return [el, ...arr];''
}

function destructivlyAddElementToBeginningOfArray(arr, el){
  return arr.unshift(el);
}