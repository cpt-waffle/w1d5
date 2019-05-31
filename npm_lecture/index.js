//two Modules module have been installed and we will use them
var cowsay = require("cowsay"); // notice we do not specify file path for these
const chalk = require('chalk'); // unlike the other example where we made our own module


console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "oO",
  T : "U "
}));

console.log(chalk.red('Hello world!'));
