let doorImage1 = document.querySelector("#door1");
let doorImage2 = document.querySelector("#door2");
let doorImage3 = document.querySelector("#door3");

let startButton = document.querySelector("#start");

let botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door

function randomChoreDoorGenerator() {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
}

function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

function gameOver(status) {
  if (status === "win") {
    startButton.textContent = "You win! Play again?";
  } else {
    startButton.textContent = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  }
  if (isBot(door) === true) {
    gameOver();
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

// Start a game round

function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.textContent = "Good Luck!";
  randomChoreDoorGenerator();
}

startRound();
