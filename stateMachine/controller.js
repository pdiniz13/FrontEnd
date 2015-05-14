/**
 * Created by ppp on 5/13/2015.
 */
$(document).ready(function() {

  /**
   * Animation function that is used to fade the doors in and out
   * @param opc
   */
  var animateDoor = function(opc) {
    $('.lDoor').animate({
      opacity: opc
    }, 250);
    $('.rDoor').animate({
      opacity: opc
    }, 250);
  };

  /**
   * Method Responsible for handling the locked state
   * @param turnStyle
   */
  var locked = function(turnStyle) {
    turnStyle.push = function() {
      $('.welcome').text('Please Insert a Coin First');
    };
    turnStyle.addCoin = function() {
      console.log('coin');
      $('.welcome').text('Thank You For Paying Please Come In');
      turnStyle.changeState(new unlocked(turnStyle));
    };
  };

  /**
   * Method Responsible for handling the unlocked state
   * @param turnStyle
   */
  var unlocked = function(turnStyle) {
    turnStyle.push = function() {
      console.log('test1');
      animateDoor(0);
      $('.welcome').text('Have a Nice Day');
      setTimeout(function() {
        animateDoor(1);
        $('.welcome').text('Please Insert a Coin')
      }, 1000);
      turnStyle.changeState(new locked(turnStyle));
    };
    turnStyle.addCoin = function() {
      $('.welcome').text("You Already Paid Please Go Through");
    };
  };

  /**
   * TurnStyle constructor which uses the locked and unlocked methods
   * @constructor
   */
  var TurnStyle = function() {
    this.curState = new locked(this);
    this.changeState = function(newState) {
      this.curState = newState;
    };
  };

  /**
   * TurnStyle method which generates state() function
   * @returns {Function}
   */
  TurnStyle.prototype.state = function() {
    console.log(this.curState);
    var turn = this;
    return function() {
      return turn.curState;
    };
  };

  //Instantiates the TurnStyle Class
  var turnStyle = new TurnStyle();
  //Generates the state() function
  var state = turnStyle.state();

  /**
   * On click functions used to insert coins and open and close doors
   */
  $('body').on('click', '.push', function(e) {
    e.preventDefault();
    turnStyle.push();
    console.log(state());
  });
  $('body').on('click', '.coin', function(e) {
    e.preventDefault();
    turnStyle.addCoin();
    console.log(state());
  });
});