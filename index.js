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
        name: "github",
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
        name: "school",
        message: "What is your intern's school?",
        when: function (answers) {
            if (answers.role === "Intern") {
                return true
            }
            return false
        }
    },
]
function askQuestion() {
// Code to gather information about the development team members, and render the HTML file.
inquirer.prompt(questions) 
.then(function(answers){
// Make new empolyee based on the role, New Manager, New Intern, New Eng, 
if (answers.role === "Manager") {
    const employee = new Manager (answers.name, answers.id, answers.email, answers.number);
    team.push(employee);
}
if (answers.role === "Engineer") {
    const employee = new Engineer (answers.name, answers.id, answers.email, answers.github);
    team.push(employee);  
}
if (answers.role === "Intern") {
    const employee = new Intern (answers.name, answers.id, answers.email, answers.school);
    team.push(employee);  
}

// add on the list of the team member and ask to add another employee
inquirer.prompt([
    {
        type: "list",
        name: "add",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
])
.then(
    function(answers) {
        if (answers.add === "Yes") {
    askQuestion();
    
        }
        else{
            writeFile();
        }
    }
)
});
}
// Output directory
function writeFile(){
    fs.writeFile(outputPath, render(team))
}
askQuestion()