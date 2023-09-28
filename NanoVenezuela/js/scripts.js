/* Learning about how to
   use the "if" and "else"
   conditionals
*/

var fridayCash = prompt('How much money can you spend?', '');
if (fridayCash >= 50) {
 alert('You should go out to a dinner and a movie.');
} else if (fridayCash >= 35) {
 alert('You should go out to a fine meal.');
} else if (fridayCash >= 12) {
 alert('You should go see a movie.');
} else {
 alert('Looks like you will be watching TV.');
}

// Learning about how to use the "prompt" method 

var name = prompt('What is your name?', '');
document.write('<p>Welcome, ' + name + '</p>');

// Functions: 

$(document).ready(function() {

 $('a').mouseover(function() {
 alert('You moved the mouse over me!');
 });

 $('.clip1').click(function() {
 $('a').unbind('mouseover');
 });

});

// Functions:

$(document).click(function(evt) {
 var xPos = evt.pageX;
 var yPos = evt.pageY;
 alert('X:' + xPos + ' Y:' + yPos);
}); // end click





