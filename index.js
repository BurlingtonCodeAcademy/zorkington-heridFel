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

async function start() {
  const welcomeMessage = `182 Main St.
  You are standing on Main Street between Church and South Winoosku.
  There is a door here. A keypad sits on the handle.
  On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  console.log("Now write your code to make this work!");
  process.exit();
}

start();

//create important classes
//player object - updates as player proceeds and collects items etc..
//game object that has specfic objects that must be met or conditions to progress to the end and finish
//this is an example of using the back-tick to create a loop that manipulates a string input
/* let answer = await ask(welcomeMeassage);
while (answer !== 'exit') {
  console.log(`Sorry I don't know how to ${answer}.`);
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
      =>awake
      =>sleep
  => Main game
*/
//
