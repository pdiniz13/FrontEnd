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
/**
 * Simple counter constructor which uses closures to generate counter functions
 * @returns {Function}
 * @constructor
 */
var Counter = function(){
  var count = 0;
  return function(){
    return count+=1;
  }
};

//Test cases

//Instantiates Initial Counter
var myCounter = Counter();
//counts up by 1
console.log(myCounter()); // outputs "1"
//counts up by 1
console.log(myCounter()); // outputs "2"

//Instantiates Initial Counter
var myCounter2 = Counter();
//second counter starts at 0 and counts up by 1
console.log(myCounter2()); // outputs "1"
//second  counter counts up by 1
console.log(myCounter2()); // outputs "2"
//second  counter counts up by 1
console.log(myCounter2()); // outputs "3"
//second  counter counts up by 1
console.log(myCounter2()); // outputs "4"
//first counter is still at 2 and now counts up by 1
console.log(myCounter()); // outputs "3"