// sync JS I: call stack and blocking loop

console.log("Before tasks");

function taskA() {
  console.log("taskA start");
  for (let i = 0; i < 5e6; i += 1) {
    // busy loop to show blocking
  }
  console.log("taskA end");
}

function taskB() {
  console.log("taskB");
}

taskA();
taskB();

console.log("After tasks");
