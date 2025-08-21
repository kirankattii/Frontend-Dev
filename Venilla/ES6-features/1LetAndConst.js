// 1. let and const (Block Scoping)

// let
// Replaces var for variable declaration with block scope.
function letExample() {
  let x = 10;
  if (true) {
    let x = 20; // Different variable
    console.log(x); // 20
  }
  console.log(x); // 10
}
letExample();