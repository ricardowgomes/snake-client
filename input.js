// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();

    // } else if (key === 'c') {
    //   let message = [];

    //   while (key !== 'c') {
    //     process.stdin.on('data', (text) => {
    //       message.push(text);
    //     });
    //   }
    //   connection.write(`Say: ${message.join('')}`);

    // CRY FOR HELP
  } else if (key === 'q') {
    connection.write(`Say: I need`);

  } else if (key === 'e') {
    connection.write(`Say: help!`);

    // MOVEMENTS
  } else if (key === 'w') {
    connection.write("Move: up");

  } else if (key === 'a') {
    connection.write("Move: left");

  } else if (key === 's') {
    connection.write("Move: down");

  } else if (key === 'd') {
    connection.write("Move: right");
  }
};


// const moveUp = (key) => {
//   connection.write("Move: up");
// };

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = {
  setupInput
};