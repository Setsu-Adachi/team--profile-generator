const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.



// Questions for the managers
const questionManagers = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",

    },
    {
        type: "input",
        name: "name",
        message: "What is your id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your office number?",
    },
];

// Question for the role.
const questionRole = [
    {
        type: "list",
        name: "choice",
        message: "Add your role.",
        choices: ["Manager", "Engineer", "Intern"],
        when: answer == "Manager"  =>
        when: answer == "Engineer"  =>
        when: answer == "Intern"  => 
    },
]


// Questions for the engineer.
const questionEngineer = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineer's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineer's email address?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineer's github user name?",
    },
];

// Questions for the Intern.
const questionIntern = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your intern's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your intern's email address?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your intern's school?",
    },
];

// Output directory
fs.writefile 
