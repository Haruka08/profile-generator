// Packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

// An array of questions to generate profiles
const questions = [
    {
        type: "list",
        message: "Who would you like to add for your team?",
        name: "job-role",
        choices:[
            "Manager",
            "Engineer",
            "Intern",
            ]
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines?",
        name: "guide"
    },
    {
        type: "input",
        message: "Test instructions?",
        name: "instruction"
    },
    {
        type: "list",
        message: "Select the license for your application?",
        name: "license",
        choices:[
        "MIT",
        "Apache",
        "GNU GPL v3",
        "BSD 3-Clause License",
        "Mozilla Public Licence 2.0",
        "No License"
        ]
    },
    {
        type: "input",
        message: "What name is the name of the license holder?",
        name: "name"
    },
    {
        type: "input",
        message: "What year was the license obtained?",
        name: "date"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

function init() {
    inquirer.prompt(
        questions
    ).then ((data) => {
        console.log(data);
        writeToFile("index.html", data);
    })
}

function writeToFile(fileName, data) {

    var html = generateHtml(data);

        function afterWriting (error) {
            const output = (error) ? 'Error' : 'Success';
            console.log(output);
        }

        fs.writeFile(fileName, html, afterWriting)
}

function generateHtml(data){
    return `# ${data.title}  ${renderLicenseBadge(data.license)}

    ## Description <span id=Description></span> 
    ${data.description}
  
    ## Table of Contents
    - [Descriptions](#Description)
    - [Installation](#Installation)
    - [Usage Information](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)
  
    ## Installation <span id=Installation></span>
    ${data.installation}
  
    ## Usage <span id=Usage></span> 
    ${data.usage}
  
    ## License <span id=License></span> 
    [${data.license}](${renderLicenseLink(data)})`;
}

init ()