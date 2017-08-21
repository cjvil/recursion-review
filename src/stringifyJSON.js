// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null) {
    return 'null';
  }

  if(typeof obj === 'function' ||typeof obj === 'undefined') {
    return '';
  }

  var output = '';
  
  output += obj;
  
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  } 

  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    }
    
    let array = [];

    for(let i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }
    
    return '[' + array.join(',') + ']'
  }

  if (typeof obj === 'object') {
    if(obj.length === 0) {
      return '{}';
    }
    
    let object = [];

    for(var key in obj) {
      let stringifyObj = stringifyJSON(obj[key])
      if(stringifyObj != '') {
        object.push('"' + key + '"' + ':' + stringifyObj);
      }
    }

    return '{' + object.join(',') + '}';
  }

  return output;
};
