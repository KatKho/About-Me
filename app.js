'use strict';

let question1 ='Do I know how to snowboard?';
let question2 ='Am I a good cook?';
let question3 ='Have I ever been to India?';
let question4 ='Do you think I have more than 2 pets?';
let question5 ='Is celery my favorite vegetable?';
let question6 ='What is my number?';
let question7 ='What is one of my favorite colors?';

const questions = [question1, question2, question3, question4, question5];
const responses = [];
const answers = ['yes', 'no', 'yes', 'yes', 'no'];
const explanations = [' I love to snowboard!', ' I hate cooking!', ' I\'ve been there twice! Such a beautiful place.', ' I have 3 pets: a dog, a cat and a fish.', ' It is my least favorite vegetable!'];
const answers7 = ['forest green', 'lavender', 'indigo'];
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
      alert('You are right!' + explanations[i]);
      count++;
    } else {
      // console.log('Oops, you missed this one.');
      alert('Oops, you missed this one.' + explanations[i]);
    }
  }
}

let answer6 = 5;
let response6 = prompt(question6);
let attempt6 = 4;
while ( attempt6 > 1) {
  if (parseInt(response6) === answer6) {
    count++;
    alert('Congratulations! The number is: ' + answer6);
    break;
  } else if (parseInt(response6) > answer6) {
    alert('Too high! Try again.');
    response6 = prompt(question6);
    attempt6--;
  } else if (parseInt(response6) < answer6) {
    alert('Too low! Try again.');
    response6 = prompt(question6);
    attempt6--;
  }
}

if (attempt6 === 1) {
  alert('Game is over! The number is: ' + answer6);
}

let correct = false;
let attempt7 = 6;
let response7 = prompt(question7);
while (attempt7 > 1) {
  for (let i= 0; i < answers7.length; i++) {
    if (response7.toLowerCase() === answers7[i]) {

      correct = true;
      break;
    }
  }
  if (correct) {
    alert('You guessed it! My favorite colors are: ' + answers7 );
    count++;
    break;
  } else {
    attempt7--;
    if (attempt7 > 1) {
      alert('Try again! You have ' + attempt7 + ' attempts left.');
      response7 = prompt(question7);
    } else {
      alert('Game is over! My favorite colors are: ' + answers7);
    }
  }
}

alert('Here is your result, ' + name +'! '+ count + ' out of 7');
