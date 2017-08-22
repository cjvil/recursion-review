// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

};

// var unwrapArray = function(str) {
//   nestedArrayCount = 1;
//   let leftIndex = str.indexOf('[');
//   let rightIndex;

//   for(let i = leftIndex; i < str.length; i++) {
//     if(str[i] === '[') {
//       nestedArrayCount++;
//     } else if (str[i] === ']') {
      
//     }
//   }
// }



var unwrapping = function(input) {
  
  if(json[0] === '[') {
    input.pop()
    input.unshift()
    let array = splittingArray(input)
  }

  if(json[0] === '{') {
    returnValue = {}
  }

  return returnValue

  input.pop()
  input.unshift()
  let inputArray = input.split(',')
}


var pairing = function(input) {
  let leftBracket = '['
  let rightBracket = ']'
  let currentValue = []
  let storageString ='';
  for(let i = 0; i < input.length; i++) {
    if(input[i] === leftBracket) {
      // should search further
      currentValue.push(storageString)
      storageString = '';
    }

    

    if(input[i] === rightBracket) {
      // should be a pair
      currentValue += rightBracket
      pairing(currentValue)
    } else 
    } else {
      // normal value
      currentValue += input[i]
    }
  }
}

var splittingArray = function(input) {
  let array = input.split(',')
  let handledArray = []
  let quotationStorage = ''
  let bracketStorage = ''
  for(let i = 0; i < array.length; i++) {
    if(quotationStorage != '') {
      quotationStorage += ','
      quotationStorage += array[i]
      if(array[i].indexOf('"') === array[i].lastIndexOf('"')) {
        handledArray.push(quotationStorage)
        quotationStorage = ''
      }
    } else {
      if(array[i].indexOf('"') === array[i].lastIndexOf('"')) {
        quotationStorage = array[i]
      } else {
        handledArray.push(array[i])
      }
    }
  }
  return array
}

var converting = function(element) {
  if(element[0] === '"') {
    if(element[element.length - 1] === '"') {
    
    }
  }
}