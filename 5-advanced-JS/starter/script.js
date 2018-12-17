/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// var answer = prompt("Which is the most widely used programming language");
// console.log(answer, "answer");
// var questions= [{},{}]
// ques = {
//   id:1,
//   title: 'Which is the most widely used programming language',
//   options: [{id:1, value: ''},{id:2,value:''}],
//   correctAns: 1(optionId),
// }

//Lecturer's solution
// (function() {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function(ans, callback) {
//     var sc;
//     if (ans === this.correct) {
//       console.log("Correct answer!");
//       console.log(sc, "sc b4 callback");
//       sc = callback(true);
//       console.log(sc, "sc right");
//     } else {
//       console.log("Wrong answer. Try again :)");
//       console.log(sc, "sc b4 callback");
//       sc = callback(false);
//       console.log(sc, "sc wrong");
//     }

//     this.displayScore(sc);
//   };

//   Question.prototype.displayScore = function(score) {
//     console.log("Your current score is: " + score);
//     console.log("------------------------------");
//   };

//   var q1 = new Question(
//     "Is JavaScript the coolest programming language in the world?",
//     ["Yes", "No"],
//     0
//   );

//   var q2 = new Question(
//     "What is the name of this course's teacher?",
//     ["John", "Micheal", "Jonas"],
//     2
//   );

//   var q3 = new Question(
//     "What does best describe coding?",
//     ["Boring", "Hard", "Fun", "Tediuos"],
//     2
//   );

//   var questions = [q1, q2, q3];

//   function score() {
//     var sc = 0;
//     return function(correct) {
//       if (correct) {
//         sc++;
//       }
//       return sc;
//     };
//   }
//   var keepScore = score();

//   function nextQuestion() {
//     var n = Math.floor(Math.random() * questions.length);
//     questions[n].displayQuestion();

//     var answer = prompt("Please select the correct answer.");

//     if (answer !== "exit") {
//       questions[n].checkAnswer(parseInt(answer), keepScore);

//       nextQuestion();
//     }
//   }

//   nextQuestion();
// })();

//My naive solution(Without prototype and score as global)

// (function() {
//   var Challenge = function(id, title, options, correctAns) {
//     this.id = id;
//     this.title = title;
//     this.options = options;
//     this.correctAns = correctAns;
//   };

//   var id = 0,
//     score = 0,
//     questions = [],
//     randomQuestion;
//   var question1 = new Challenge(
//     (id += 1),
//     "which is most coolest language",
//     [{ id: 1, value: "Javascript" }, { id: 2, value: "Java" }],
//     1
//   );
//   var question2 = new Challenge(
//     (id += 1),
//     "which is most widely used software development principle",
//     [{ id: 1, value: "Agile" }, { id: 2, value: "Waterfall" }],
//     1
//   );
//   var question3 = new Challenge(
//     (id += 1),
//     "which is most widely used automation testing tools",
//     [{ id: 1, value: "Selenium" }, { id: 2, value: "Appium" }],
//     1
//   );
//   questions.push(question1, question2, question3);
//   // var answer = prompt("Which is the most widely used programming language");
//   // co nsole.log(answer, "answer");

//   var showQuestion = function() {
//     var questionNo = Math.round(Math.random() * 2);
//     randomQuestion = questions[questionNo];

//     console.log(randomQuestion.title);
//     console.log("1:" + randomQuestion.options[0].value);
//     console.log("2:" + randomQuestion.options[1].value);
//     validateAnswer();
//   };

//   showQuestion();

//   function validateAnswer() {
//     var answer = prompt(randomQuestion.title);
//     if (parseInt(answer) === randomQuestion.correctAns) {
//       console.log("You answer is correct");
//       getScore();
//       showQuestion();
//     } else {
//       console.log("You are wrong. Please try again");
//       if (answer !== "exit") showQuestion();
//     }
//   }
//   function getScore() {
//     score += 1;
//     console.log("Your score is " + score);
//   }
// })();

//My solution 2(with proto)

(function() {
  var Challenge = function(title, options, correctAns) {
    this.title = title;
    this.options = options;
    this.correctAns = correctAns;
  };

  Challenge.prototype.showQuestion = function() {
    console.log(this.title);
    for (var i = 0; i < this.options.length; i++) {
      console.log(i + 1 + ":" + this.options[i].value);
    }
  };

  Challenge.prototype.validateAnswer = function(answer, callback) {
    var score;
    if (parseInt(answer) === this.correctAns) {
      console.log("You answer is correct");
      score = callback(true);
    } else {
      console.log("You are wrong. Please try again");
      score = callback(false);
    }
    this.displayScore(score);
  };

  Challenge.prototype.displayScore = function(score) {
    console.log("Your score is " + score);
    console.log("____________________________________");
  };

  function getScore() {
    var score = 0;
    console.log(score, "score Inn after initialize getScore");
    return function(correct) {
      console.log(score, "score Inn close getScore");
      if (correct) score++;
      return score;
    };
  }

  var keepScore = getScore();

  var questions = [];
  var question1 = new Challenge(
    "which is most coolest language",
    [{ id: 1, value: "Javascript" }, { id: 2, value: "Java" }],
    1
  );
  var question2 = new Challenge(
    "which is most widely used software development principle",
    [{ id: 1, value: "Agile" }, { id: 2, value: "Waterfall" }],
    1
  );
  var question3 = new Challenge(
    "which is most widely used automation testing tools",
    [{ id: 1, value: "Selenium" }, { id: 2, value: "Appium" }],
    1
  );
  questions.push(question1, question2, question3);

  function nextQuestion() {
    var questionNo = Math.round(Math.random() * (questions.length - 1));
    questions[questionNo].showQuestion();
    var answer = prompt("Please select the correct answer");

    if (answer !== "exit") {
      questions[questionNo].validateAnswer(answer, keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
