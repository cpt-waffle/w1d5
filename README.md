## W1D5 - APIs, Modules, and Testing

### [Repo](git remote add origin git@github.com:vasiliy-klimkin/w1d5.git)

### API's ( What are they)

Googled Answered: 'a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.'

Simplified answer: 'a bunch of methods that you can use, that gives you some specific results, answers and/or data.'

### Modularazitaion

Modularaization helps with cleanliness of your code and code reuseability.

You should always modularaize your code when you can so that it will be easier to work on through it/understand it/debug it.

### Lets Make Some Modules Now!

In Node, every single file, is a module. We can check this by using `console.log` on the `module` keyword.

```js
console.log(module);
```
Will output an entier object of the `module` which is an object.
Notice that the object has a key `exports` and value of `{}`

Whatever we put into this `exports` object can be used in a different file.

```js
// File 1 called batman.js
module.exports = {
  whoAmI: function () {
    console.log("IM BATMAN!!!!")
  },
  utilityBelt: ['grapling hook', 'bat-granade', 'batarang'],
  PI: 3.14,
}
```

Congradulations ! We have made a module that we can re use in other functions.

To use this module in an another file, we use the `require('file_path_here')`

```js
  //File 2 App.js. Same directory as batman.js
  let batman = require('./batman'); // modules have been imported.
  batman.whoAmI();// Can we use this ?!?! Holy Moly we Can!
```

### NPM (~~Nihilistic PostModern Mistake~~, ~~Nominal Pizza Masticator~~, Node Package Manager)

NPM Answer: Essential JavaScript development tools that help you go to market faster and build powerful applications using modern open source code.

TLDR: Packages and Modules that people made and post it online that you can use.

#### How do I use it?

1) We need to run `npm init` to initialize something called `package.json`.
This file will be the `config` file for our project.
```bash
npm init # will ask alot of questions for configuration (entry file, package name, etc), so set it up accordingly
```
Once we have this we can install packages from `npm` server.
Example we used is : [CowSay](https://www.npmjs.com/package/cowsay)

```bash
npm i cowsay
```
Once the downloading and installation has been finished, in your directory you will have a new folder called, `node_modules` (where your downloaded packages will live). You will also have a new key inside `package.json` which will be called `dependencies` and the value being an object full of package names you have downloaded throughout this project.

#### How Do I Use This Now?

```js
let cowsay = require('cowsay')// dont need to specify the path just the package name, unlike when you make your own module

console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "oO",
  T : "U "
}));

```

Running this file will print this out to console:

```bash
 _________________
( I'm a moooodule )
 -----------------
        o   ^__^
         o  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

Now we know how to use modules!
Remember be careful of old modules, terrible documentation, and security flaws.
Generally speaking (very generally) if module has alot of stars and downloads on github, then its a good indication that its an alright module.

### Testing (Very Quick)

There are many `NPM` packages used for testing your code. This is so that we know that our code runs perfectly and covers all tests (edge cases for a given problem).
We will be using [mocha](https://mochajs.org/) for our testing.

