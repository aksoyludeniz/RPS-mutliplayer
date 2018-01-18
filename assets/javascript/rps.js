// Initialize Firebase
var config = {
  apiKey: "AIzaSyCOpj6-2MNYQvSMQ2qLz5Bu5qQcpmzLGvs",
  authDomain: "rps-game-53f02.firebaseapp.com",
  databaseURL: "https://rps-game-53f02.firebaseio.com",
  projectId: "rps-game-53f02",
  storageBucket: "",
  messagingSenderId: "825285234986"
};
firebase.initializeApp(config);
// $("#add-user").on("click", function(event) {

var database = firebase.database();
// var peo;
var chats = database.ref('chat');
var connections = database.ref('connections');
// var playerone = playerOne;
// var playertwo = playertwo;
// var waiting = false;

var messages = $('.messages');
var username = $('#username');


// $("#submit-bid").on("click", function(event) {
//   event.preventDefault();
//
//
// connectedRef.on("value", function(snap) {
//
//
// var con = connectionsRef.push(true);
//
// con.onDisconnect().remove();
// });


//
// connectionsRef.on("value", function(snap) {
//
//   $("#connected-viewers").text(snap.numChildren());
//
// });

var wins = 0;
var losses = 0;
var tie = 0;
// var playerOne = firstplayer;
// var playerTwo = secondplayer;

database.ref("/scoreData").on("value", function(snapshot) {

if (snapshot.child("playerOne").exists() && snapshot.child("playerTwo").exists()) {

  playerOne = snapshot.val().playerOne;
  playerTwo = snapshot.val().playerTwo;



$("#firstPerson").text(snapshot.val().playerOne);

$("#secondPerson").text( snapshot.val().playerTwo);

console.log(snapshot.val().playerOne);
console.log(snapshot.val().playerTwo);
}



}, function(errorObject) {
console.log("The read failed: " + errorObject.code);
});

$("#submit-bid").on("click", function(event) {
event.preventDefault();


var playerOne =
$("#firstPerson").val().trim();

var playerTwo =
$("#secondPerson").val().trim();



console.log(playerOne);
console.log(playerTwo);

var newplayer = {

firstplayer: playerOne,
secondplayer: playerTwo,


};




database.ref().push(newplayer);


$("#firstPerson").val("");
$("#secondPerson").val("");


var playerOneWins = 0;
var playerTwoWins = 0;

var gameMessage;

     if ((playerOne === "rock") && (playerTwo === "scissors")) {
       wins++;
       playerOneWins++;
       gameMessage = "<p> player One Wins </p>"
     } else if ((playerOne === "rock") && (playerTwo === "paper")) {
      wins++;
      playerTwoWins++;
       gameMessage = "<p> player two Wins </p>"
     } else if ((playerOne === "scissors") && (playerTwo === "rock")) {
       wins++;
       playerTwoWins++;
        gameMessage = "<p> player two Wins </p>"

     } else if ((playerOne=== "scissors") && (playerTwo === "paper")) {
       wins++;
       playerOneWins++;
        gameMessage = "<p> player One Wins </p>"
     } else if ((playerOne=== "paper") && (playerTwo === "rock")) {
       wins++;
       playerTwoWins++;
        gameMessage = "<p> player two Wins </p>"
     } else if ((playerOne=== "paper") && (playerTwo === "scissors")) {
       wins++;
       playerTwoWins++;
        gameMessage = "<p> player two Wins </p>"
     } else if (playerOne === playerTwo) {

       tie++;
        gameMessage = "<p> No one Wins </p>"
     }






// if ((playerTwo === "rock") || ( playerTwo === "paper") || playerTwo === "scissors") {
//        if ((playerTwo === "rock") && (playerOne === "scissors")) {
//          wins++;
//        } else if ((playerTwo === "rock") && (playerOne === "paper")) {
//          losses++;
//        } else if ((playerTwo === "scissors") && (playerOne === "rock")) {
//          losses++;
//        } else if ((playerTwo === "scissors") && (playerOne === "paper")) {
//          wins++;
//        } else if ((playerTwo === "paper") && (playerOne === "r")) {
//          wins++;
//        } else if ((playerTwo === "p") && (playerOne === "s")) {
//          losses++;
//        } else if (playerTwo === playerOne) {
//          ties++;
//        }
//
//   }

  var html =
       "<p> player one: " + playerOne + "</p>" +
       "<p> player two: " + playerTwo + "</p>" +
       "<p>wins: " + wins + "</p>" +
       "<p>losses: " +  losses + "</p>" +
       "<p>ties: " + tie + "</p>"
       + gameMessage;
     // Set the inner HTML contents of the #game div to our html string
     document.querySelector("#game").innerHTML = html;


//        var messageRef = ref.child('userWriteable'/messageQueue);
//
//        messages.Ref.on('child_added',function (snap)
//        {
//        app.push('messages',snap.val());
     });

$("#submit-message").on("click",function(){
event.preventDefault();
  console.log("hello");

  var message =
  $("#message").val().trim();
 console.log(message);

 database.ref("/message").push(message);
});
database.ref("/message").on("value",function(snapshot){
 console.log(snapshot);
});



//  var html
//  append message nd sipaly html in dom.
// //
// app.message = function () {
//   if(!app user) return console.log('not logged in');
//   var messageQueueRef = firebase.database().ref('/data-modeling')
//   var userMesssageRef = messageQueueRef.child(app.user.uid);
//   userMesssageRef.set({
//     email: app.user.email,
//     messageText: app.messageText
//   });
// };
