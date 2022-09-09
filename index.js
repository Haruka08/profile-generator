// Packages and files required for this application
// const inquirer = require('inquirer');
// const fs = require('fs');

const Employee = require("./lib/employee");
// const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
// const Intern = require("./lib/intern");

// let newEmployee = new Employee ("Haruka", "123", "haruka@gmail.com");
let newManager = new Manager ("Haruka", "123", "haruka@gmail.com", 0001);

console.log(newManager);

// An array of questions to generate profiles
const basicQuestions = [
    {
        type: "list",
        message: "Who would you like to add for your team?",
        name: "jobRole",
        choices:[
            "Manager",
            "Engineer",
            "Intern",
            ]
    },
    {
        type: "input",
        message: "What is the employee name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee email?",
        name: "email"
    },
];

// const managerQuestion = [
//     {
//         type: "input",
//         message: "What is the manager office number?",
//         name: "officeNum"
//     }
// ];

// const engineerQuestion = [
//     {
//         type: "input",
//         message: "What is the engineer GitHub username?",
//         name: "github"
//     }
// ];

// const internQuestion = [
//     {
//         type: "input",
//         message: "Which school did the intern attend?",
//         name: "school"
//     }
// ];

function init() {
    inquirer.prompt(
        basicQuestions
    ).then ((data) => {
        console.log(data);
        writeToFile("index.html", data);
    }).then ((specific) =>{
        if (data.jobRole === "Manager"){
            inquirer.prompt(
                managerQuestion
            )
        } else if (data.jobRole === "Engineer"){
            inquirer.prompt(
                engineerQuestion
            )
        } else {
            inquirer.prompt(
                internQuestion
            )
        }
    })

}

// function writeToFile(fileName, data) {

//     var html = generateHtml(data);

//         function afterWriting (error) {
//             const output = (error) ? 'Error' : 'Success';
//             console.log(output);
//         }

//         fs.writeFile(fileName, html, afterWriting)
// }

// function generateHtml(data){
//     return `# ${data.title}  ${renderLicenseBadge(data.license)}

//     ## Description <span id=Description></span> 
//     ${data.description}
  
//     ## Table of Contents
//     - [Descriptions](#Description)
//     - [Installation](#Installation)
//     - [Usage Information](#Usage)
//     - [License](#License)
//     - [Contributing](#Contributing)
//     - [Tests](#Tests)
//     - [Questions](#Questions)
  
//     ## Installation <span id=Installation></span>
//     ${data.installation}
  
//     ## Usage <span id=Usage></span> 
//     ${data.usage}
  
//     ## License <span id=License></span> 
//     [${data.license}](${renderLicenseLink(data)})`;
// }

// init ()