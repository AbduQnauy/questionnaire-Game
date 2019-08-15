// function Question(q, ...a) {
//   this.q = q;
//   this.answers = a;
//   this.accepted = a[1];
// }
// var questions = [];
// questions[0] = new Question("How are you?", "Fine", "Very Good", "Bad", "Sad");
// questions[1] = new Question("How old are you?", "12", "26", "20", "30");
// questions[2] = new Question("Where are you live?", "Luxor", "Minia", "Cairo");
// questions[3] = new Question("Are you married?", "true", "false");
// questions[4] = new Question(
//   "What your favourite sport?",
//   "baseball",
//   "boxing",
//   "swimming",
//   "volleyball",
//   "football"
// );

// function playGame(WH) {
//   var answer, score, result;
//   score = 0;
//   result = "";

//   function ask(data) {
//     answer = prompt(data);
//   }
//   function horizontal() {
//     console.log("---------------------------------------------");
//   }

//   return function() {
//     while (answer !== "exit") {
//       var randomNum = Math.ceil(Math.random() * WH.length);
//       horizontal();
//       console.log(
//         result +
//           " " +
//           "score:" +
//           score +
//           "  " +
//           WH[randomNum - 1].q +
//           "\t" +
//           " Choose:-"
//       );
//       for (var i = 0; i < WH[randomNum - 1].answers.length; i++) {
//         console.log(i + ": " + WH[randomNum - 1].answers[i] + "\n");
//       }
//       horizontal();

//       ask(WH[randomNum - 1].q);
//       if (WH[randomNum - 1].answers[answer] === WH[randomNum - 1].accepted) {
//         score++;
//         result = "Correct :) ";
//       } else {
//         result = "Wrong :( ";
//       }
//     }
//   };
// }

// var reply = playGame(questions);
// reply();
// ////////////////////////////////////////////////////////

(function() {
  function Question(q, ...a) {
    this.q = q;
    this.answers = a;
    this.accepted = a[1];
  }
  var questions = [];
  questions[0] = new Question(
    "How are you?",
    "Fine",
    "Very Good",
    "Bad",
    "Sad"
  );
  questions[1] = new Question("How old are you?", "12", "26", "20", "30");
  questions[2] = new Question("Where are you live?", "Luxor", "Minia", "Cairo");
  questions[3] = new Question("Are you married?", "true", "false");
  questions[4] = new Question(
    "What your favourite sport?",
    "baseball",
    "boxing",
    "swimming",
    "volleyball",
    "football"
  );

  function playGame(WH) {
    var answer, score, result;
    score = 0;
    result = "";

    function ask(data) {
      answer = prompt(data);
    }
    function horizontal() {
      console.log("---------------------------------------------");
    }

    return function() {
      while (answer !== "exit") {
        var randomNum = Math.ceil(Math.random() * WH.length);
        horizontal();
        console.log(result + " " + "score:" + score);
        console.log(WH[randomNum - 1].q + "\t" + " Choose:-");
        horizontal();

        for (var i = 0; i < WH[randomNum - 1].answers.length; i++) {
          console.log(i + ": " + WH[randomNum - 1].answers[i] + "\n");
        }
        horizontal();

        ask(WH[randomNum - 1].q);
        if (WH[randomNum - 1].answers[answer] === WH[randomNum - 1].accepted) {
          score++;
          result = "Correct :) ";
        } else {
          result = "Wrong :( ";
        }
      }
    };
  }

  var reply = playGame(questions);
  reply();
})();
