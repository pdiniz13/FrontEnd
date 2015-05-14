/**
 * Created by ppp on 5/13/2015.
 */
/**
 * Explain in as much detail as possible the differences between an HTTP GET and an HTTP POST.
 * Provide examples of usage.
 *
 * A POST request is the safest of the two when you are trying to submit data. It is meant to be used to submit data
 * (usually from forms) to the server. The data is then sent together with the body of the request.
 *
 * A GET sends data encoded into the URL, and not through the body of the request. For this reason get requests should
 * not be used to submit sensitive data to the server since it's saved in the browser history and server logs. The more
 * appropriate time to use get requests is when you are just trying to receive data from the server and do not need
 * to send any sensitive data in order to access that data. GET requests are better suited for this purpose, because
 * given that the request and any parameters associated with that request are encoded into the URL one can simply
 * re use that URL in order to reach that same page.
*/

//This would be an example of a POST request in which user data is submitted.
$('body').on('submit', '.message', function (event){
  event.preventDefault();
  var obj = {
    "username": $('#currentUserName').text(),
    "text": $('#text').val(),
    "roomname": $('#currentRoom').text()
  };

  var JSONobj = JSON.stringify(obj);

  $.ajax('https://api.parse.com/1/classes/chatterbox', {
    type: 'POST',
    data: JSONobj,
    dataType: 'json',
    contentType: 'application/json',
    success: function () {
      console.log('data was submitted');
    },
    error: function () {
      console.log('data was not submitted');
    }
  })
});

//This would be an example of a GET request in which the data is being requested for a particular public room
var where = '{"roomname":' + '"' + currentRoom + '"' + '}';
$.ajax('https://api.parse.com/1/classes/chatterbox', {
  type: 'GET',
  data: {where: where, order: '-createdAt', limit: "10"},
  contentType: 'application/json',
  success: function (response) {
    console.log(response)
  },
  error: function (errorMessage) {
    console.log(errorMessage)
  }
});