/*
  =============================================
  🧩 JavaScript Loop Practice Assignment
  =============================================
  Goal: Get comfortable writing for, while, and do...while loops in real-life scenarios.
  Each section has 3 short exercises.
  Write your code below each section comment.
  ---------------------------------------------
  */

  // 🔹 PART A – FOR LOOPS
  // 1. Counting Up:
  //    Print numbers from 1 to 20 using a for loop.
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  // 2. Multiples of 5:
  //    Print all multiples of 5 from 5 to 50.
  //    Hint: use i += 5 instead of i++.
  for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }
  // 3. Sum of First 10 Numbers:
  //    Use a for loop to calculate the sum of numbers from 1 to 10 and display the total.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}


  // 🔹 PART B – WHILE LOOPS
  // 1. Password Checker (simulated):
  //    Keep checking a variable `input` until it matches "open".
  //    You can simulate this with an array like ["wrong", "nope", "open"].
    const attempts = ["wrong", "nope", "open"];
    let index = 0;
    let input = attempts[index];
    while (input !== "open") {
      console.log("Access denied:", input);
      index++;
      input = attempts[index];
    }
    console.log("Access granted:", input);
  // 2. Add Until Finish:
  //    Keep adding numbers in an array until the word "Finish" appears.
    const items = [5, 10, 15, "Finish", 20];
    let total = 0;
    let i = 0;
    while (items[i] !== "Finish") {
      total += items[i];
      i++;
    }
    console.log("Total before Finish:", total);
  // 3. Countdown:
  //    Start from 10 and keep counting down until you reach 0.
  //    Print each number on a new line.
let count = 10;
while(count >=0){
  console.log(count);
  count--;
}


  // 🔹 PART C – DO...WHILE LOOPS
  // 1. Guessing Game (simulation):
  //    Generate a random number between 1–10 using:
  //       Math.floor(Math.random() * 10) + 1
  //    Keep “guessing” until you get 5. The loop should run at least once.
      let guess;
    do {
      guess = Math.floor(Math.random() * 10) + 1;
      console.log("Guessed:", guess);
    } while (guess !== 5);
    console.log("🎯 Got it! The number was 5.");
  // 2. Menu Simulation:
  //    Show a fake menu at least once (like “1. Play  2. Exit”) and exit when option = 2.
  //
  // 3. Number Input Validation:
  //    Ask for a number greater than 10.
  //    Keep re-checking until it’s valid (simulate input with variables).



  // 🔹 PART D – BONUS: LOOP CONTROL
  // 1. Break Example:
  //    Loop numbers 1–10. Stop completely when the number is 7.
  //
  // 2. Continue Example:
  //    Loop numbers 1–10. Skip printing when the number is 5.
  //
  // 3. Combined:
  //    Print numbers 1–20, skip even numbers, but stop entirely when you hit 17.



  // ✅ Submission
  // - Submit a single .html file containing your solutions.
  // - Include comments describing which loop type you used.
  // - Use console.log() or document.write() to display results.
