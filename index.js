// TODO: Include packages needed for this application
//we need inquirer, fs and connect our generateMarkdown module
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils");

// TODO: Create an array of questions for user input
//use the inquirer syntax similiar to fetch and then in .then(questions) to access the array as response.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project:",
    
    },
    {
        //put a default ToC in here as optional
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:",
    },
    {
        //add screenshot here
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."

    },
    {
        type: "list",
        name: "license",
        message: "Please select a license if applicable from the choices provided:",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    
];

inquirer.prompt(questions)
.then((data))
//console.log the questions and answers returned


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
