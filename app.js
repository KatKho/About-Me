'use strict';

let question1 ='Do I know how to snowboard?';
let question2 ='Am I a good cook?';
let question3 ='Have I ever been to India?';
let question4 ='Do you think I have more than 2 pets?';
let question5 ='Is celery my favorite vegetable?';
let question6 ='What is my number?';
let answer6 = 5;
let correct = false;

const questions = [question1, question2, question3, question4, question5];
const responses = [];
const answers = ['yes', 'no', 'yes', 'yes', 'no'];
const explanations = [' I love to snowboard!', ' I hate cooking!', ' I\'ve been there twice! Such a beautiful place.', ' I have 3 pets: a dog, a cat and a fish.', ' It is my least favorite vegetable!'];
let name = prompt('What is your name?');
alert('Hi '+ name + '!');
let count = 0;

// for (let i = 0; i < questions.length; i++) {
//   let userInput = prompt(questions[i]).toLowerCase();
//   if (userInput !== 'yes' && userInput !== 'no') {
//     alert('Please answer with \'yes\' or \'no\'.');
//     i--;
//   } else {
//     responses.push(userInput);
//     if (responses[i] === answers[i]) {
//       // console.log('You are right!');
//       alert('You are right!' + explanations[i]);
//       count++;
//     } else {
//       // console.log('Oops, you missed this one.');
//       alert('Oops, you missed this one.' + explanations[i]);
//     }
//   }
// }

let response6 = prompt(question6);
let attempt = 1;
while ( attempt < 4) {
  if (parseInt(response6.toLowerCase()) === answer6) {
    count++;
    alert('Congratulations! The number is: ' + answer6);
    break;
  } else if (parseInt(response6.toLowerCase()) >= answer6) {
    alert('Too high! Try again.');
    response6 = prompt(question6);
    attempt++;
  } else if (parseInt(response6.toLowerCase()) <= answer6) {
    alert('Too low! Try again.');
    response6 = prompt(question6);
    attempt++;
  }
}

if (attempt === 4) {
  alert('Game is over! The number is: ' + answer6);
}

if (count >= 4) {
  alert('Amazing job, ' + name + '! You know me well!');
} else {
  alert( name + ', good luck next time!');
}

