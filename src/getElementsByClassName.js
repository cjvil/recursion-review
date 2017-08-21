// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let returnValues = []

  var checkName = function(name) {
    if(name === undefined) {
      return false
    }
    let names = name.split(' ')
    for(let i = 0; i < names.length; i++) {
      if(names[i] === className) {
        return true
      }
    }
    return false
  }

  var recursion = function(element) {

    if(checkName(element.className)) {
        returnValues.push(element)
    }
    if (element.childNodes != undefined) {
      for(let i = 0; i < element.childNodes.length; i++) {
        let children = element.childNodes[i]
        if (children.childNodes != undefined) {
          recursion(children)
        } else if(checkName(element.className)) {
          returnValues.push(children)
        }
      }
    }
    
  }

  let elements = document.body
  recursion(elements)
  return returnValues

};
