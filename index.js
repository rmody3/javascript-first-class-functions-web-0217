function receivesAFunction(func){
  func()
}

function returnsANamedFunction() {
  return function aFunction(){}
}

function returnsAnAnonymousFunction() {
  return function(){}
}
