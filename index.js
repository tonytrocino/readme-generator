// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
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
    name: "about",
    message: "Please tell us about your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "clone",
    message: "What is the link to clone the repo?",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the license you used for this project.",
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
    message: "Please enter any testing protocols you used for your project?",
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
