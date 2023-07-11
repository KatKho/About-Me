'use strict';

let question1 ='Do I know how to snowboard?';
let question2 ='Am I a good cook?';
let question3 ='Have I ever been to India?';
let question4 ='Do you think I have more than 2 pets?';
let question5 ='Is celery my favorite vegetable?';

const questions = [question1, question2, question3, question4, question5];
const responses = [];
const answers = ['yes', 'no', 'yes', 'yes', 'no'];
let name = prompt('What is your name?');
alert('Hi '+ name + '!');
let count = 0;

for (let i = 0; i < questions.length; i++) {
  let userInput = prompt(questions[i]).toLowerCase();
  if (userInput !== 'yes' && userInput !== 'no') {
    alert('Please answer with \'yes\' or \'no\'.');
    i--;
  } else {
    responses.push(userInput);
    if (responses[i] === answers[i]) {
    // console.log('You are right!');
      alert('You are right!');
      count++;
    } else {
      // console.log('Oops, you missed this one.');
      alert('Oops, you missed this one.');
    }
  }
}

if (count >= 4) {
  alert('Amazing job, ' + name + '! You know me well!');
} else {
  alert( name + ', good luck next time!');
}

