// Packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

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