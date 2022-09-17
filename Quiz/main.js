//$(document).ready(function(){
//$( window ).on( "load", function() {

//window.onload = function() {
//alert('Welcome to Quiz Ninja!');
//console.log('test');


const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz) {
      let score = 0; // initialize score

// main game loop
for(const [question,answer] of quiz){
    const response = ask(question);
    check(response, answer);
}
//end main game loop

gameOver();

// function declarations

function ask(question){
    return prompt(question);
}

function check(response,answer){
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    }
// At the end of the game, report the player's score
function gameOver(){
 alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}
}
window.onload = function() {
     start(quiz);
}
 //const question = 'What is superman\'s name?';
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//});
//}