// Code to define and export the Engineer class.  This class should inherit from Employee.

const Employee = require ("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.github = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;

