import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  function getRandomArrayIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
}

  let randomWho = who[getRandomArrayIndex(who)]
  let randomAction = action[getRandomArrayIndex(action)]
  let randomWhat = what[getRandomArrayIndex(what)]
  let randomWhen = when[getRandomArrayIndex(when)]


  document.getElementById("excuse1").innerHTML = randomWho;
  document.getElementById("excuse2").innerHTML = randomAction;
  document.getElementById("excuse3").innerHTML = randomWhat;
  document.getElementById("excuse4").innerHTML = randomWhen;

};
