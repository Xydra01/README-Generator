// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Are there any installation instructions you'd like to include? (If no, please type N/A)",
    name: "installation",
  },
  {
    type: "input",
    message: "What are some instructions and examples for using your project?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please list out any collaboraters on your project or any third party assets that require attribution.",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are some tests a user of your project could perform?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "questions",
  },
  {
    type: "list",
    message: "Which License is your project covered under?",
    name: "license",
    choices: [
      "MIT",
      "AFL-3.0",
      "Apache-2.0",
      "Artistic-2.0",
      "BSL-1.0",
      "CC",
      "WTFPL",
      "GPL",
      "LGPL",
      "ISC",
      "NCSA",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`File ${fileName} written successfully.`);
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("generatedREADME.md", markdownContent);
  });
}

// Function call to initialize app
init();
