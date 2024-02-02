const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.





// Question for the role.
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",

    },
    {
        type: "input",
        name: "id",
        message: "What is your id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "list",
        name: "role",
        message: "Add your role.",
        choices: ["Manager", "Engineer", "Intern"],

    },
    {
        type: "input",
        name: "number",
        message: "What is your office number?",
        when: function (answers) {
            if (answers.role === "Manager") {
                return true
            }
            return false
        }
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineer's github user name?",
                when: function (answers) {
            if (answers.role === "Engineer") {
                return true
            }
            return false
        }
    },
    {
        type: "input",
        name: "name",
        message: "What is your intern's school?",
        when: function (answers) {
            if (answers.role === "Intern") {
                return true
            }
            return false
        }
    },
]

inquirer.prompt(questions) 
.then(function(answers){
// Make new empolyee based on the role, New Manager, New Intern, New Eng, 
// add on the list of the team member

// ask to add another employee
})
.then(function(){
fs.writeFile(outputPath, render(team));
});
// Output directory
// 
