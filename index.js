const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

class Item {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.inventory = [];
  }
}

class Kitchen {
  constructor() {
    this.welcomeMessage = `Welcome to the Kitchen, grab a snack!`;
    this.nextRoom = null;
  }
}

class Foyer {
  constructor() {
    this.welcomeMessage = `Welcom to the Foyer!!!`;
    this.nextRoom = new Kitchen();
  }
}

class MainStreet {
  constructor() {
    this.welcomeMessage = `182 Main St.
    You are standing on Main Street between Church and South Winooski.
    There is a door here. A keypad sits on the handle.
    On the door is a handwritten sign.
    >_`;
    this.sign = `The sign says "Welcome to Burlington Code Academy!
      Come on up to the third floor.
      If the door is locked, use the code 12345."`;
  }
  read(thingToRead) {
    return this[thingToRead];
  }
  take() {
    return "That would be selfish. How will other students find their way?";
  }
}

class Game {
  constructor() {
    this.room = new MainStreet();
  }

  changeToRoom(newRoom) {
    this.room = newRoom;
  }
}

async function start() {
  let room = new MainStreet();
  let answer = await ask(room.welcomeMessage);
  //answer === "read sign" => ['read'], 'sign'];
  while (answer !== "exit") {
    let commands = answer.split(" ");
    let action = commands[0];
    let object = commands[1];
    console.log({ room });
    if (room[action] !== undefined) {
      console.log(room[action](object));
    } else {
      console.log(`Sorry I don't know how to ${action}`);
    }
    answer = await ask(`${room.welcomeMessage}`);
  }
  process.exit();
}

start();
//create important classes
//player object - updates as player proceeds and collects items etc..
//game object that has specfic objects that must be met or conditions to progress to the end and finish
//this is an example of using the back-tick to create a loop that manipulates a string input
/* let answer = await ask(welcomeMeassage);
while (answer !== 'exit') {
  cnosole.log(`Sorry I don't know how to ${answer}.`);
  answer = await ask (`${welcomeMessage}`);
}
*/

//Game Structure
/* states
  => Room
    build a room class 
      a new instance will be created for every new room
    => room descriptions

    => room connections
    => room inventory
  =>player
    => player inventory
    => player status 
    =>
  => Main game
*/
