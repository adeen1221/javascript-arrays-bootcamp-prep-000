var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray (array,element){
  ["Twix",...chocolateBars];
  const morechocolateBars=["Twix",...chocolateBars];
  return addElementToBeginningOfArray();
}

function destructivelyAddElementToBeginningOfArray(array, element){
   chocolateBars.unshift ("Twix");
   return destructivelyAddElementToBeginningOfArray();
}
function addElementToEndOfArray(array, element){
  [...chocolateBars, "Hersheys"];
const morechocolateBars2=[...chocolateBars, "Hersheys"];
return addElementToEndOfArray();
}
function deconstructivelyAddElementToEndOfArray(array,element){
  chocolateBars.push["Kisses"];
  return deconstructivelyAddElementToEndOfArray();
}
function accessElementInArray(array, index){
  var myArray=[1,2,3];
  return myArray[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  const days=["Monday", "Tuesday", "Wednesday"];
  days.shift();
  return destructivelyRemoveElementFromBeginningOfArray();
}
function removeElementFromBeginningOfArray(array){
  var cats=["Milo", "Garfield", "Otis"];
  cats.slice(1);
  return removeElementFromBeginningOfArray();
}
function destructivelyRemoveElementFromEndOfArray(array){
  var iceCreams=["chocolate", "vanilla", "strawberry"];
  iceCreams.pop();
  return destructivelyRemoveElementFromEndOfArray();
}
function removeElementFromEndOfArray(array){
  var iceCreams=["chocolate", "vanilla", "strawberry"];
  iceCreams.slice(0, iceCreams.lenght-1);
  return removeElementFromEndOfArray();
}

  
  
  

  


