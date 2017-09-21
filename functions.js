function isEven(x) {
  if(x %2 === 0){
    return true
  }
  else {
    return false
  }
}

function isEven1(x) {
  return x %2 === 0
}


function factorial(x){
  var factorial = x
  for(var i = x - 1; i > 0; i--){
    factorial = factorial * i
  }
  return factorial
}

//factorial inverso

function factorialInverso(x){
  var factorial = x
  for (var i = 1; i < x; i++){
    factorial = factorial * i
  }
  return factorial
}
