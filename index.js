// TODO: Include packages needed for this application
//we need inquirer, fs and connect our generateMarkdown module
const inquirer = require("inquirer");
const fs = require("fs");
const generateRM = require("./utils/generateMarkdown.js");
const fileName = "README2.md";

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
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license if applicable from the choices provided:",
    choices: [
      "No License",
      "GNU AGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "features",
    message: "Please include any features",
  },
  {
    type: "input",
    name: "contribute",
    message: "Are there any instructions for how to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "Example tests",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "githubUserName",
    message: "What is your GitHub username?",
  },
];

// inquirer.prompt(questions).then((data) => {
//   console.log(data);
//   const rmContent = generateMarkdown(data);

//   fs.writeFile("README2.md", rmContent, (err) =>
//     err
//       ? console.log(err)
//       : console.log("Excelsior! You have generated a professional README file!")
//   );
// });
//console.log the questions and answers returned

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateRM(data);
  fs.writeFile(fileName, markdown, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Excelsior! You have just created a professional README.md file!"
        )
  );
}

// TODO: Create a function to initialize app
//add inquirer and writeFile here
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    writeToFile(fileName, data)
  })
}

// Function call to initialize app
init();
