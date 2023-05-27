let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]


//Returns a URL-friendly version of a string
// "North Dakots" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}


//Kansas -> kansas 
//North Dakota -> north-dakota

//urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-")
    ) 
  })
  return urls;
} 

//urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element))
}


const prefix = "https://example.com/"

//Return an array of full URLs
function buildUrl(elements) {
  return elements.map(element => prefix+urlify(element))
}


//singles: Imperative version
function imperativeSingles(elements) {
  let singles = []
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1){
      singles.push(element)
    }
  })
  return singles
}

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1)
}


//Return two-word states
function twoWordStatesOne(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

function twoWordStatesTwo(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2)
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

//sum: Imperative Solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  })
  return total
}

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n})
}


//lengths: Imperative Solution
function imperativeLengths(elements) {
  let lengths = {}
  elements.forEach(function(element) {
    lengths[element] = element.length
  })
  return lengths
}

//lengths: Functional Solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

console.log(functionalLengths(states))
