//$(document).ready(function(){
//$( window ).on( "load", function() {

window.onload = function() {
alert('Welcome to Quiz Ninja!');
console.log('test');


const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0; // initialize score


for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    }
// At the end of the game, report the player's score

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
//const question = 'What is superman\'s name?';
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//});
}