/**
 * Created by ppp on 5/13/2015.
 */
/**
 * Explain in as much detail as possible the differences between an HTTP GET and an HTTP POST.
 * Provide examples of usage.
 *
 * Although its possible to transmit data from the client to the server a POST request is better suited for this
 * purposes and in any RESTful architecture it is inappropriate for a GET request change any data on the server.
 * POST requests allow parameters to be attached to the body of the request which is why they are much better suited for
 * transmitting data.
 *
 * A GET sends data encoded into the URL, and not through the body of the request. For this reason get requests should
 * not be used to submit sensitive data to the server since it's saved in the browser history and server logs. The more
 * appropriate time to use get requests is when you are just trying to receive data from the server and do not need
 * to send any sensitive data in order to access that data. GET requests are better suited for this purpose, because
 * given that the request and any parameters associated with that request are encoded into the URL one can simply
 * re use that URL in order to reach that same page.
 */
//The following examples assume that you would have access to the jQuery library.
//This would be an example of a POST request in which user data is submitted.
//This is the data being submitted to the server
var obj = {
  "username": "Paulo",
  "text": "Hello",
  "roomname": "lobby"
};
//This is used to Stringify the JavaScript object
var JSONobj = JSON.stringify(obj);
//This is the ajax request being used to request data from the server. The type of the request is specified as a POST
//REQUEST. Im am also specifying that the data being sent and received are both of type JSON.
$.ajax('https://api.parse.com/1/classes/chatterbox', {
  type: 'POST',
  data: JSONobj,
  dataType: 'json',
  contentType: 'application/json',
  //If the ajax response is successful this will success method will run
  success: function() {
    console.log('data was submitted');
  },
  //If the ajax response is unsuccessful this error method will run
  error: function() {
    console.log('data was not submitted');
  }
});


//This would be an example of a GET request in which the data is being requested for a particular public room
//These are the specification for the data being requested from the server
var data = {where: "{'roomname': 'lobby'",
  order: '-createdAt',
  limit: "10"
};
//This is used to Stringify the JavaScript object
var JSONobj = JSON.stringify(data);
//This is the ajax request being used to request data from the server. The type of the request is specified as a GET
//REQUEST. Im am also specifying that the data being sent and received are both of type JSON.
$.ajax('https://api.parse.com/1/classes/chatterbox', {
  type: 'GET',
  data: JSONobj,
  contentType: 'application/json',
  success: function(response) {
    console.log(response)
  },
  error: function(errorMessage) {
    console.log(errorMessage)
  }
});