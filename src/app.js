/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#pbt").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = [
    "The dog",
    "My grandma",
    "My neighbour's cat ",
    "My unicorn",
    "My little brother"
  ];
  let action = ["ate", "peed", "crushed", "broke", "ripped"];
  let what = ["my homework", "the keys", "my paper", "the proyect", "ripped"];
  let when = [
    "before class",
    "with his nose",
    "with an axe",
    "during my lunch",
    "while I was sleeping"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
