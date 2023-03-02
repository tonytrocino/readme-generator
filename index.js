// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information:",
  },
  {
    type: "input", 
    name: "contribution",
    message: "Contribution Guidelines:"
  },
  {
    type: "input", 
    name: "testing",
    message: "Test Instructions:"
  },
  {
    type: "input",
    name: "repo",
    message: "Repository Name:",
  },
  {
    type: "list",
    name: "license",
    message: "License:",
    choices: [
      "MIT",
      "Mozilla",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Testing Protocols:",
  },
  {
    type: "input",
    name: "author",
    message: "Author Name:",
  },
  {
    type: "input",
    name: "userName",
    message: "GitHub Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err && console.error(err));
}

// TODO: Create a function to initialize app
async function init() {
    console.log("README GENERATOR");
    console.log("----------------");
    const answers = await inquirer.prompt(questions);
    let data = generateMarkdown(answers);
    writeToFile("my-readme.md", data);
    console.log("my-readme.md written to disk");
}

// Function call to initialize app
init();
