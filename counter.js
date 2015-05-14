/**
 * Created by ppp on 5/13/2015.
 */
//In Javascript, write a function 'Counter' that on each call, the output begins at "1" and each subsequent call
// is one more than the previous. the output should match the API below:
//
//  e.g.
//var myCounter = Counter();
//console.log(myCounter()); // outputs "1"
//console.log(myCounter()); // outputs "2"
//
//var myCounter2 = Counter();
//console.log(myCounter2()); // outputs "1"
//console.log(myCounter()); // outputs "3"
//
var Counter = function(){
  var count = 0;
  return function(){
    return count+=1;
  }
};

var myCounter = Counter();
console.log(myCounter()); // outputs "1"
console.log(myCounter()); // outputs "2"

var myCounter2 = Counter();
console.log(myCounter2()); // outputs "1"
console.log(myCounter2()); // outputs "2"
console.log(myCounter2()); // outputs "3"
console.log(myCounter2()); // outputs "4"
console.log(myCounter()); // outputs "3"