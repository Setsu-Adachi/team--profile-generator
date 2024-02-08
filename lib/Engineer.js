// Code to define and export the Engineer class.  This class should inherit from Employee.

const Employee = require ("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }

}

module.exports = Engineer;

