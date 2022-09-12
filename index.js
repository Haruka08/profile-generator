// Packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const employees = [];

// An array of questions to generate profiles
const basicQuestion = [
    {
        type: "list",
        message: "Who would you like to add for your team?",
        name: "jobRole",
        choices:[
            "Manager",
            "Engineer",
            "Intern",
            "No more member"
            ]
    },
    {
        type: "input",
        message: "What is the employee name?",
        name: "name",
        when: (data) => {
            return (data.jobRole !== "No more member");
        }
    },
    {
        type: "input",
        message: "What is the employee ID?",
        name: "id",
        when: (data) => {
            return (data.jobRole !== "No more member");
        }
    },
    {
        type: "input",
        message: "What is the employee email?",
        name: "email",
        when: (data) => {
            return (data.jobRole !== "No more member");
        }
    }
];

const managerQuestion = [
    {
        type: "input",
        message: "What is the manager office number?",
        name: "officeNum"
    }
];

const engineerQuestion = [
    {
        type: "input",
        message: "What is the engineer GitHub username?",
        name: "github"
    }
];

const internQuestion = [
    {
        type: "input",
        message: "Which school did the intern attend?",
        name: "school"
    }
];

function createManager(name, id, email, officeNum) {
    const newManager = new Manager(name, id, email, officeNum);
    employees.push(newManager);
    mainQuestion();
}

function createEngineer(name, id, email, gitHubUser) {
    const newEngineer = new Engineer(name, id, email, gitHubUser);
    employees.push(newEngineer);
    mainQuestion();
}

function createIntern(name, id, email, school) {
    const newIntern = new Intern(name, id, email, school);
    employees.push(newIntern);
    mainQuestion();
}

function variableInfo(employee){
    if (employee.getRole() == "Manager"){
        employee.getOfficeNum()
    } else if (employee.getRole() == "Engineer"){
        employee.getGithub()
    } else {
       employee.getSchool()
    }
}

function mainQuestion() {
    inquirer.prompt(
        basicQuestion
    ).then ((data) => {
        if (data.jobRole == "Manager"){
            inquirer.prompt(
                managerQuestion
            ).then ((answers) => {
                    createManager(data.name, data.id, data.email, answers.officeNum);
                }
            )
        } else if (data.jobRole == "Engineer"){
            inquirer.prompt(
                engineerQuestion
            ).then((answers) => {
                createEngineer(data.name, data.id, data.email, answers.github);
            })
        } else if (data.jobRole == "Intern"){
            inquirer.prompt(
                internQuestion
            ).then((answers) => {
                createIntern(data.name, data.id, data.email, answers.school);
            })
        } else {
            console.log (employees)
            const htmlPageContent = generateHTML(employees);

            fs.writeFile('index.html', htmlPageContent, (err) =>
              err ? console.log(err) : console.log('Successfully created index.html!'));
            return;
        }

    })
}

function generateHTML(employees){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
        ${employees.map((employee)=>{
            return `<div class="card" style="width: 18rem;">
            <div class="card-header">
            ${employee.getRole()}
              ${employee.getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.getID()}</li>
              <li class="list-group-item" mailto:>${employee.getEmail()}</li>
              <li class="list-group-item">${variableInfo(employee)}</li>
            </ul>
          </div>`
        })}

    
          
        
    </body>
    </html>`;
}

mainQuestion()